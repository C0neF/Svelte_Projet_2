<script>
	// 简单的测试页面来验证Tailwind CSS
</script>

<svelte:head>
	<title>Tailwind CSS 测试页面</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
	<div class="max-w-4xl mx-auto">
		<!-- 标题 -->
		<h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
			🎉 Tailwind CSS 测试页面
		</h1>
		
		<!-- 成功消息 -->
		<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8">
			<div class="flex items-center">
				<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
				</svg>
				<span class="font-medium">成功！</span> Tailwind CSS 已正确配置并运行。
			</div>
		</div>

		<!-- 功能展示卡片 -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
			<!-- 卡片 1 -->
			<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
				<div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-800 mb-2">快速开发</h3>
				<p class="text-gray-600 text-sm">使用实用优先的CSS框架快速构建现代界面。</p>
			</div>

			<!-- 卡片 2 -->
			<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
				<div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-800 mb-2">响应式设计</h3>
				<p class="text-gray-600 text-sm">内置响应式设计工具，适配所有设备尺寸。</p>
			</div>

			<!-- 卡片 3 -->
			<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
				<div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-800 mb-2">可定制</h3>
				<p class="text-gray-600 text-sm">完全可定制的设计系统，满足项目需求。</p>
			</div>
		</div>

		<!-- 按钮示例 -->
		<div class="bg-white rounded-lg shadow-md p-6 mb-8">
			<h2 class="text-2xl font-semibold text-gray-800 mb-4">按钮样式示例</h2>
			<div class="flex flex-wrap gap-4">
				<button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
					主要按钮
				</button>
				<button class="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
					次要按钮
				</button>
				<button class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
					成功按钮
				</button>
				<button class="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
					危险按钮
				</button>
				<button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
					轮廓按钮
				</button>
			</div>
		</div>

		<!-- 表单示例 -->
		<div class="bg-white rounded-lg shadow-md p-6">
			<h2 class="text-2xl font-semibold text-gray-800 mb-4">表单样式示例</h2>
			<form class="space-y-4">
				<div>
					<label for="name" class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
					<input type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="请输入您的姓名">
				</div>
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
					<input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="请输入您的邮箱">
				</div>
				<div>
					<label for="message" class="block text-sm font-medium text-gray-700 mb-1">消息</label>
					<textarea id="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="请输入您的消息"></textarea>
				</div>
				<button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
					提交
				</button>
			</form>
		</div>

		<!-- 返回链接 -->
		<div class="text-center mt-8">
			<a href="/" class="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium">
				<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
				</svg>
				返回主页
			</a>
		</div>
	</div>
</div>
