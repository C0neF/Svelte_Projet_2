/* eslint-disable no-restricted-globals */
import { env } from '@huggingface/transformers'

// 必须在导入其他 transformers.js 模块之前配置环境
env.allowLocalModels = false
env.allowRemoteModels = true

import type { PreTrainedModel, Processor, ProgressInfo, Tensor } from '@huggingface/transformers'
import type { LoadMessageEvents, ProcessMessageEvents, WorkerMessageEvent } from '@xsai-transformers/shared/worker'

import { AutoModelForVision2Seq, AutoProcessor, RawImage } from '@huggingface/transformers'
import { isWebGPUSupported } from 'gpuu/webgpu'

import type { Load, Process } from './vlm'

// No proxy or fetch override needed - using Hugging Face directly

let processor: Processor
let model: PreTrainedModel

export enum MessageStatus {
  Loading = 'loading',
  Ready = 'ready',
}

async function process(instruction: string, imageBuffer: Uint8ClampedArray | Uint8Array, imageWidth: number, imageHeight: number, channels: 1 | 2 | 3 | 4) {
  try {
    const messages = [{
      role: 'user',
      content: [
        { type: 'image' },
        { type: 'text', text: instruction },
      ],
    }]

    const img = new RawImage(imageBuffer, imageWidth, imageHeight, channels)

    // @ts-expect-error - messages is not typed
    const text = processor.apply_chat_template(messages, { add_generation_prompt: true })
    const inputs = await processor(text, [img], { do_image_splitting: false })
    const generatedIds = await model.generate({ ...inputs, max_new_tokens: 100 }) as Tensor | undefined
    const output = processor.batch_decode(
      generatedIds?.slice(null, [inputs.input_ids.dims.at(-1), null]) as Tensor | number[][],
      { skip_special_tokens: true },
    )

    self.postMessage({
      data: { data: output?.[0]?.trim() || '' },
      type: 'processResult',
    } satisfies ProcessMessageEvents)
  } catch (err) {
    console.error('[Worker] Error processing:', err)
    self.postMessage({
      data: { data: `Error: ${err instanceof Error ? err.message : 'Unknown error'}` },
      type: 'processResult',
    } satisfies ProcessMessageEvents)
  }
}

async function load(modelId: string, options?: any) {
  try {
    console.log('[Worker] Load function called with modelId:', modelId);
    const device = (await isWebGPUSupported()) ? 'webgpu' : 'wasm'

    self.postMessage({ data: { message: `Using device: "${device}"` }, type: 'info' } satisfies LoadMessageEvents)
    self.postMessage({ data: { message: 'Loading models...' }, type: 'info' } satisfies LoadMessageEvents)
    
    // 发送设备类型到主线程
    self.postMessage({ data: { device: device.toUpperCase() }, type: 'device' } satisfies LoadMessageEvents)

    // 配置模型加载选项
    const processorOptions: any = {
      progress_callback: (progress: ProgressInfo) => {
        self.postMessage({ data: { progress }, type: 'progress' } satisfies LoadMessageEvents)
      },
    }
    
    // 优化的 dtype 配置
    const modelOptions: any = {
      dtype: {
        embed_tokens: 'fp16',
        vision_decoder: 'q4',
        decoder_model_merged: 'q4',
      },
      device,
      progress_callback: (progress: ProgressInfo) => {
        self.postMessage({ data: { progress }, type: 'progress' } satisfies LoadMessageEvents)
      },
    }

    // 加载模型
    self.postMessage({ data: { message: `Loading model from Hugging Face: ${modelId}` }, type: 'info' } satisfies LoadMessageEvents)
    processor = await AutoProcessor.from_pretrained(modelId, processorOptions)
    model = await AutoModelForVision2Seq.from_pretrained(modelId, modelOptions)

    self.postMessage({ data: { message: 'Ready!', status: MessageStatus.Ready }, type: 'status' } satisfies LoadMessageEvents)
  }
  catch (err) {
    console.error('[Worker] Error loading model:', err)
    self.postMessage({ data: { error: err }, type: 'error' } satisfies LoadMessageEvents)
    throw err
  }
}

self.addEventListener('message', (event: MessageEvent<WorkerMessageEvent<Load, 'load'> | WorkerMessageEvent<Process, 'process'>>) => {
  const { type } = event.data
  
  switch (type) {
    case 'process':
      // 确保模型已加载后才处理
      if (!processor || !model) {
        console.warn('[Worker] Model not loaded yet')
        self.postMessage({
          data: { data: 'Model not loaded yet' },
          type: 'processResult',
        } satisfies ProcessMessageEvents)
        return
      }
      process(event.data.data.instruction, event.data.data.imageBuffer, event.data.data.imageWidth, event.data.data.imageHeight, event.data.data.channels)
      break
    case 'load':
      // Get modelId from the load data, fallback to default
      const loadData = event.data.data as any
      const modelId = loadData?.modelId || 'HuggingFaceTB/SmolVLM-Instruct'
      const options = loadData?.options || {}
      load(modelId, options)
      break
  }
})