<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { LoadOptionProgressCallback, ProgressInfo, ProgressStatusInfo } from '@xsai-transformers/shared/types';
	import { createVLMWorker, type VLMWorker } from '$lib/vlm';
	import workerURL from '$lib/worker?worker&url';
	import { locale, t } from '$lib/i18n';
	import { Settings, Languages, Sun, Moon } from 'lucide-svelte';

	// --- 响应式变量 ---

	// 元素引用
	let videoScreen: HTMLVideoElement;
	let captureCanvas: HTMLCanvasElement;

	// 状态管理
	let isSupported = true;
	let isWebGPUSupported = true;
	let permissionGranted = false;
	let loaded = false;
	let isProcessing = false;
	let isModelLoading = false;
	let isWebGPULoading = false;
	let isDark = false; // 暗黑模式
	let showSettings = false; // 控制设置面板的显示

	// AI 相关
	let instructionText = '';
	let responseText = '';
	let vlmWorker: VLMWorker | null = null;

	// 性能控制
	let scale = 0.3; // 图像缩放
	let maxImageSize = 224; // 最大图像尺寸
	let processingInterval = 2000; // 处理间隔 (ms)
	let selectedModel = 'HuggingFaceTB/SmolVLM-Instruct'; // 默认选中的模型
	let deviceType = ''; // 设备类型 (WebGPU 或 WASM)
	
	// 可用的模型列表
	const availableModels = [
		{ id: 'HuggingFaceTB/SmolVLM-Instruct', name: 'SmolVLM Instruct' }
	];

	// 性能监控
	let fpsCounter = 0;
	let lastFrameTime = 0;
	let processingTime = 0;

	// 模型加载进度（简化版本，参考Vue实现）
	let overallProgress = 0;
	let loadingItems: ProgressInfo[] = [];
	const loadingItemsSet = new Set<string>();
	let hasStartedLoading = false;
	let currentLoadedModel = ''; // 记录当前已加载的模型


	// 摄像头与媒体设备
	let stream: MediaStream | null = null;
	let videoInputs: MediaDeviceInfo[] = [];
	let selectedVideoSourceDeviceId: string | undefined = undefined;

	// --- 生命周期 ---

	onMount(async () => {
		// 初始化暗黑模式
		initializeDarkMode();
		
		// 检查 WebGPU 和媒体设备支持
		isWebGPUSupported = !!navigator.gpu;
		isSupported = !!navigator.mediaDevices;
		
		// 设置设备类型显示
		deviceType = isWebGPUSupported ? 'WebGPU' : 'WASM';

		if (!isWebGPUSupported || !isSupported) {
			return;
		}

		// 获取设备列表并请求权限
		await setupDevices();

		vlmWorker = createVLMWorker({ baseURL: workerURL });
	});

	onDestroy(() => {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
		}
		vlmWorker?.dispose();
		// 清理进度状态
		resetProgressState();
	});

	// --- 核心函数 ---
	
	// 初始化暗黑模式
	function initializeDarkMode() {
		// 尝试从localStorage 读取用户偏好
		const storedTheme = localStorage.getItem('theme');
		
		if (storedTheme) {
			// 使用存储的偏好
			isDark = storedTheme === 'dark';
		} else {
			// 读取系统偏好
			const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			isDark = prefersDark;
		}
		
		// 应用到 document
		document.documentElement.classList.toggle('dark', isDark);
	}
	
	// 切换暗黑模式
	function toggleDarkMode() {
		isDark = !isDark;
	}
	
	// 监听 isDark 变化
	$: if (typeof document !== 'undefined') {
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}

	// 完全重置进度状态的辅助函数
	function resetProgressState() {
		overallProgress = 0;
		loadingItems = [];
		loadingItemsSet.clear();
		hasStartedLoading = false;
	}

	async function setupDevices() {
		try {
			// 请求权限以触发设备列表的填充
			const tempStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
			permissionGranted = true;
			tempStream.getTracks().forEach(track => track.stop()); // 关闭临时流

			// 获取视频设备列表
			const devices = await navigator.mediaDevices.enumerateDevices();
			videoInputs = devices.filter(device => device.kind === 'videoinput');
			if (videoInputs.length > 0) {
				selectedVideoSourceDeviceId = videoInputs[0].deviceId;
				await startCamera();
			}
		} catch (err) {
			console.error("Error accessing media devices.", err);
			permissionGranted = false;
		}
	}

	async function startCamera() {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
		}
		try {
			const constraints = {
				video: { deviceId: selectedVideoSourceDeviceId ? { exact: selectedVideoSourceDeviceId } : undefined },
				audio: false
			};
			stream = await navigator.mediaDevices.getUserMedia(constraints);
			if (videoScreen) {
				videoScreen.srcObject = stream;
			}
		} catch (err) {
			console.error("Error starting camera:", err);
		}
	}

	const onProgress: LoadOptionProgressCallback = async (progress) => {
		// 严格检查：只在模型加载状态且未完成加载时处理进度
		if (!isModelLoading || loaded) {
			return;
		}
		
		if (progress.status === 'initiate') {
			// 新文件发现
			if (loadingItemsSet.has(progress.file)) {
				return;
			}
			loadingItemsSet.add(progress.file);
			loadingItems = [...loadingItems, progress];
		} else if (progress.status === 'progress') {
			// 更新现有文件的进度
			const itemIndex = loadingItems.findIndex((item: any) => item.file === progress.file);
			if (itemIndex >= 0) {
				loadingItems[itemIndex] = progress;
				loadingItems = [...loadingItems];
			} else {
				// 新文件的进度更新
				loadingItemsSet.add(progress.file);
				loadingItems = [...loadingItems, progress];
			}
			
			// 重新计算总体进度 - 参考 Vue 项目的算法
			let newTotalSize = 0;
			let newLoadedSize = 0;
			
			for (const item of loadingItems) {
				if ('total' in item && item.total) {
					newTotalSize += item.total;
					if ('loaded' in item && item.loaded) {
						newLoadedSize += item.loaded;
					}
				}
			}
			
			// 计算总体进度百分比
			if (newTotalSize > 0) {
				overallProgress = Math.min((newLoadedSize / newTotalSize) * 100, 100);
			}
		} else if (progress.status === 'done') {
			const itemIndex = loadingItems.findIndex((item: any) => item.file === progress.file);
			if (itemIndex >= 0) {
				loadingItems[itemIndex] = progress;
				loadingItems = [...loadingItems];
			}
			
			// 检查是否所有文件都完成了
			const allDone = loadingItems.every(item => 
				item.status === 'done' || item.status === 'ready'
			);
			
			if (allDone && loadingItems.length > 0) {
				// 所有文件都完成，设置进度为100%
				overallProgress = 100;
			}
		} else if (progress.status === 'ready') {
			// 模型准备就绪
			overallProgress = 100;
		}
	};

	function captureImage() {
		if (!stream || !videoScreen?.videoWidth || !captureCanvas) {
			console.warn('Video stream not ready for capture.');
			return null;
		}

		// 参考 Vue 项目的优化：先缩放，再限制最大尺寸
		const originalWidth = videoScreen.videoWidth;
		const originalHeight = videoScreen.videoHeight;
		
		// 计算缩放后的尺寸
		const scaledWidth = Math.round(originalWidth * scale);
		const scaledHeight = Math.round(originalHeight * scale);
		
		// 进一步限制最大尺寸以控制模型输入
		const aspectRatio = originalWidth / originalHeight;
		let finalWidth = scaledWidth;
		let finalHeight = scaledHeight;

		if (Math.max(scaledWidth, scaledHeight) > maxImageSize) {
			if (scaledWidth > scaledHeight) {
				finalWidth = maxImageSize;
				finalHeight = Math.round(maxImageSize / aspectRatio);
			} else {
				finalHeight = maxImageSize;
				finalWidth = Math.round(maxImageSize * aspectRatio);
			}
		}

		captureCanvas.width = finalWidth;
		captureCanvas.height = finalHeight;
		
		// 添加 willReadFrequently 优化
		const context = captureCanvas.getContext('2d', { willReadFrequently: true });
		if (!context) {
			console.warn('Canvas context not ready for capture.');
			return null;
		}

		context.drawImage(videoScreen, 0, 0, finalWidth, finalHeight);
		const frame = context.getImageData(0, 0, finalWidth, finalHeight);

		return {
			imageBuffer: frame.data,
			imageWidth: frame.width,
			imageHeight: frame.height,
			channels: 4 as const
		};
	}

	async function sendData() {
		if (!isProcessing || !vlmWorker) return;

		const rawImg = captureImage();
		if (!rawImg) {
			responseText = $t('capture_failed');
			return;
		}

		try {
			const startTime = performance.now();
			const response = await vlmWorker.process({
				instruction: instructionText || 'In one sentence, what do you see?',
				imageBuffer: rawImg.imageBuffer,
				imageWidth: rawImg.imageWidth,
				imageHeight: rawImg.imageHeight,
				channels: rawImg.channels
			});
			const endTime = performance.now();

			// 计算处理时间和 FPS - 参考 Vue 项目的优化
			processingTime = Math.round(endTime - startTime);
			if (lastFrameTime) {
				const frameTime = endTime - lastFrameTime;
				fpsCounter = Math.round(1000 / frameTime * 100) / 100; // 2 位小数
			}
			lastFrameTime = endTime;
			responseText = response ?? '';

		} catch (e) {
			console.error('[SendData] Error:', e);
			responseText = `Error: ${e instanceof Error ? e.message : 'Unknown error'}`;
		}
	}

	let animationFrameId: number | null = null;
	let lastProcessTime = 0;

	function processingLoop() {
		if (!isProcessing) {
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
				animationFrameId = null;
			}
			return;
		}

		const now = performance.now();
		
		// 参考 Vue 项目：只在足够时间过去后才处理（尊重 processingInterval）
		if (now - lastProcessTime >= processingInterval) {
			lastProcessTime = now;
			sendData().finally(() => {
				if (isProcessing) {
					animationFrameId = requestAnimationFrame(processingLoop);
				}
			});
		} else {
			// 调度下次检查
			if (isProcessing) {
				animationFrameId = requestAnimationFrame(processingLoop);
			}
		}
	}

	async function handleStart() {
		// 防止重复点击
		if (isModelLoading || isWebGPULoading) {
			return;
		}
		
		if (!stream) {
			responseText = 'Camera not available. Cannot start.';
			console.warn('Camera not available. Please grant permission first.');
			return;
		}

		// 检查是否需要重新加载模型（模型切换时）
		const needReload = !loaded || (loaded && selectedModel !== currentLoadedModel);

		if (needReload && !hasStartedLoading) {
			// 第一次加载或切换模型：完全重置所有状态
			resetProgressState();
			responseText = '';
			loaded = false;  // 标记为未加载
			currentLoadedModel = selectedModel;  // 记录当前加载的模型
			
			// 设置加载状态
			isModelLoading = true;
			isWebGPULoading = true;
			hasStartedLoading = true;

			try {
				// 使用选中的模型
				let finalModelId: string = selectedModel || 'HuggingFaceTB/SmolVLM-Instruct';
				
				// 开始加载模型
				await vlmWorker?.load(finalModelId, { onProgress });
				
				// 设置进度为100%
				overallProgress = 100;
				
				// 等待一小段时间显示100%
				await new Promise(resolve => setTimeout(resolve, 500));

				// 加载完成
				isModelLoading = false;
				isWebGPULoading = false;
				loaded = true;
				hasStartedLoading = false;  // 重置标志，允许下次切换模型
				
				// 加载成功后立即开始处理
				isProcessing = true;
				responseText = '...';
				processingLoop();
			} catch (error) {
				console.error('[Start] Model loading failed:', error);
				isModelLoading = false;
				isWebGPULoading = false;
				isProcessing = false;
				responseText = $t('model_loading_failed');
				// 失败时完全重置进度状态，允许重试
				resetProgressState();
				hasStartedLoading = false;
				return;
			}
		} else if (loaded && selectedModel === currentLoadedModel) {
			// 模型已加载且没有切换，直接开始/恢复处理
			isProcessing = true;
			responseText = '...';
			processingLoop();
		}
	}

	function handleStop() {
		isProcessing = false;
		if (responseText === '...') responseText = '';
	}

	function handleClick() {
		// 加载期间禁止点击，避免重复触发加载
		if (isModelLoading || isWebGPULoading) {
			console.log('[Click] Blocked - model is loading');
			return;
		}
		
		if (isProcessing) {
			handleStop();
		} else {
			handleStart();
		}
	}

	// --- Svelte 反应性 ---
	$: if (selectedVideoSourceDeviceId) {
		startCamera();
	}

	function toggleLocale() {
		locale.update($locale => $locale === 'en' ? 'zh' : 'en');
	}
</script>

<svelte:head>
	<title>SmolVLM Realtime WebGPU (Svelte)</title>
</svelte:head>

<div class="p-0 sm:p-4 max-h-dvh max-w-dvw relative h-full w-full">
	<div class="relative z-0 h-full w-full overflow-hidden rounded-none sm:rounded-3xl shadow-md flex items-center justify-center">
		<!-- 左上角信息 -->
		<div class="absolute left-0 top-0 z-10 p-2 sm:p-4 flex items-center gap-2">
			<div class="bg-white dark:bg-neutral-900 text-black dark:text-white text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 rounded-xl p-2 sm:rounded-2xl sm:px-3 sm:py-2 transition-all duration-300 ease-in-out">
				SmolVLM Realtime WebGPU (Svelte)
			</div>
		</div>

		<!-- 性能监控 -->
		<div class="absolute right-4 top-4 z-10 bg-white/80 dark:bg-neutral-900/80 text-black dark:text-white text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 rounded-xl p-2 sm:rounded-2xl sm:px-3 sm:py-2 transition-all duration-300 ease-in-out flex gap-2">
			{#if deviceType}
				<span class="font-semibold">{deviceType}</span>
				<span class="text-neutral-400">|</span>
			{/if}
			<span>FPS: <span class="font-mono">{fpsCounter}</span></span>
			<span>Time: <span class="font-mono">{processingTime} ms</span></span>
		</div>

		<!-- 控制面板 -->
		{#if showSettings}
			<div class="grid-cols-[0.2fr_0.4fr_1fr] absolute bottom-16 right-4 z-10 grid items-center gap-x-2 gap-y-1 text-sm min-w-[280px] bg-neutral-500/40 dark:bg-neutral-900/70 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 rounded-xl p-2 sm:rounded-2xl sm:px-3 sm:pb-1 sm:pt-2 transition-all duration-300 ease-in-out backdrop-blur-lg">
				<div>{$t('scale')}:</div>
				<label for="scale" class="w-[90px] flex items-center gap-2">
					<input type="range" bind:value={scale} min={0.1} max={1.0} step={0.1} disabled={isProcessing} class="flex-1" />
				</label>
				<div class="text-right font-mono">{scale.toFixed(1)}</div>

				<div>{$t('max_size')}:</div>
				<label for="max-size" class="w-[90px] flex items-center gap-2">
					<input type="range" bind:value={maxImageSize} min={128} max={512} step={32} disabled={isProcessing} class="flex-1" />
				</label>
				<div class="text-right font-mono">{maxImageSize}</div>

				<div>{$t('interval')}:</div>
				<label for="interval" class="w-[90px] flex items-center gap-2">
					<input type="range" bind:value={processingInterval} min={500} max={5000} step={250} class="flex-1" />
				</label>
				<div class="text-right font-mono">{(processingInterval / 1000).toFixed(1)}s</div>

				<div class="min-w-20">{$t('ask')}:</div>
				<label for="instruction" class="col-span-2 w-full flex items-center gap-2">
					<input type="text" bind:value={instructionText} placeholder={$t('instruction_placeholder')} disabled={isProcessing} class="w-full flex-1 rounded-lg px-2 py-1 text-nowrap text-sm outline-none bg-neutral-700/50 dark:bg-neutral-950 focus:bg-neutral-700/50 dark:focus:bg-neutral-900 border-2 border-solid border-neutral-500/50 dark:border-neutral-900 focus:border-neutral-400 dark:focus:border-neutral-500 transition-all duration-200 ease-in-out disabled:cursor-not-allowed text-white disabled:text-neutral-400 dark:disabled:text-neutral-600 shadow-sm" />
				</label>

				<div class="min-w-20">{$t('model')}:</div>
				<label for="model" class="col-span-2 w-full flex items-center gap-2">
					<select bind:value={selectedModel} disabled={isProcessing} class="w-full flex-1 rounded-lg px-2 py-1 text-nowrap text-sm outline-none bg-neutral-700/50 dark:bg-neutral-950 focus:bg-neutral-700/50 dark:focus:bg-neutral-900 border-2 border-solid border-neutral-500/50 dark:border-neutral-900 focus:border-neutral-400 dark:focus:border-neutral-500 transition-all duration-200 ease-in-out disabled:cursor-not-allowed text-white disabled:text-neutral-400 dark:disabled:text-neutral-600 shadow-sm">
						{#each availableModels as model}
							<option value={model.id} class="bg-neutral-800 text-white">{model.name}</option>
						{/each}
					</select>
				</label>
			</div>
		{/if}

		<!-- 开始/停止按钮 -->
		<button on:click={handleClick} class="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-10 h-full max-h-8 sm:max-h-10 px-2 sm:px-3 sm:py-2 flex items-center rounded-full backdrop-blur-lg text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 transition-all duration-300 ease-in-out {isProcessing ? 'bg-red-700/60 dark:bg-red-900/90 hover:bg-red-800/60 dark:hover:bg-red-900/90' : 'bg-green-700/60 dark:bg-green-900/90 hover:bg-green-800/60 dark:hover:bg-green-900/90'}">
			{#if isProcessing}
				{$t('stop')}
			{:else if isWebGPULoading || isModelLoading}
				<div class="i-svg-spinners:6-dots-rotate size-4" />
			{:else}
				{$t('start')}
			{/if}
		</button>


		<!-- Info Box: Progress or Response -->
		{#if isModelLoading || responseText}
			<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-lg px-3 py-2 bg-neutral-500/40 dark:bg-neutral-900/70 border border-neutral-400/40 dark:border-neutral-500/50 rounded-2xl backdrop-blur-lg transition-all duration-300 ease-in-out">
				{#if isModelLoading}
					<!-- Progress Bar Content -->
					<div class="flex items-center gap-3">
						<div class="flex-1 bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden relative">
							<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
							<div class="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2.5 rounded-full transition-all duration-700 ease-out" 
							     style="width: {Math.min(Math.max(overallProgress, 0), 100)}%">
							</div>
						</div>
						<!-- 显示实际进度百分比 -->
						<p class="text-white/95 dark:text-neutral-100/95 text-sm font-mono min-w-[3.5rem] text-right">
							{Math.floor(Math.min(Math.max(overallProgress, 0), 100))}%
						</p>
					</div>
				{:else if responseText}
					<!-- Response Text Content -->
					<p class="text-white/98 dark:text-neutral-100/90 text-xs sm:text-xl text-center">
						{responseText}
					</p>
				{/if}
			</div>
		{/if}

		<!-- 覆盖层: 能力/权限检查 -->
		{#if !isSupported}
			<div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-neutral-50/20">
				<div class="text-neutral-700 dark:text-neutral-300 text-4xl font-semibold">{$t('not_supported')}</div>
				<div class="max-w-[50%] text-neutral-800 dark:text-neutral-200 text-2xl text-center">{$t('not_supported_camera')}</div>
			</div>
		{:else if !isWebGPUSupported}
			<div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-neutral-50/20">
				<div class="text-neutral-700 dark:text-neutral-300 text-4xl font-semibold">{$t('not_supported')}</div>
				<div class="max-w-[50%] text-neutral-800 dark:text-neutral-200 text-2xl text-center">{$t('not_supported_webgpu')}</div>
			</div>
		{:else if !permissionGranted}
			<div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-orange-50/20 dark:bg-orange-900/10">
				<div class="text-orange-700 text-4xl font-semibold">{$t('warning')}</div>
				<div class="max-w-[50%] text-orange-600 dark:text-orange-400 text-2xl text-center">{$t('permission_not_granted')}</div>
			</div>
		{:else}
			<div class="relative h-5/6 w-5/6 overflow-hidden rounded-2xl shadow-lg">
				<video bind:this={videoScreen} autoplay muted playsinline class="h-full w-full object-cover"></video>
			</div>
			<canvas bind:this={captureCanvas} class="hidden"></canvas>
		{/if}

		<!-- 右下角设备选择和主题切换 -->
		<div class="absolute bottom-0 right-0 z-10 h-full max-h-12 sm:max-h-18 p-2 sm:p-4 flex items-center gap-1 sm:gap-2">
			<button on:click={() => showSettings = !showSettings} class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out">
				<Settings class="w-4 h-4" />
			</button>
			<button on:click={toggleLocale} class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out">
				<Languages class="w-4 h-4" />
			</button>
			<select bind:value={selectedVideoSourceDeviceId} class="h-full px-2 sm:px-3 cursor-pointer rounded-full bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out">
				{#each videoInputs as device}
					<option value={device.deviceId} class="text-xs sm:text-sm">{device.label}</option>
				{/each}
			</select>
			<button on:click={toggleDarkMode} class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out">
				<!-- Sun/Moon Icon -->
				{#if isDark}
					<Sun class="w-4 h-4" />
				{:else}
					<Moon class="w-4 h-4" />
				{/if}
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	/* Global styles have been moved to app.css */
	/* Svelte transition class for fade effect */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s ease-in-out;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0.5;
	}
	.fade-enter-to,
	.fade-leave-from {
		opacity: 1;
	}
	
	/* Shimmer animation for loading */
	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(200%);
		}
	}
	
	.animate-shimmer {
		animation: shimmer 2s infinite;
	}
</style>
