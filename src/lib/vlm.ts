import type { LoadOptionProgressCallback, LoadOptions } from '@xsai-transformers/shared/types'

import { createTransformersWorker } from '@xsai-transformers/shared/worker'

export interface Process {
  instruction: string
  imageBuffer: Uint8ClampedArray | Uint8Array
  imageWidth: number
  imageHeight: number
  channels: 1 | 2 | 3 | 4
}

export interface ProcessResult {
  data: string
}

export interface Load<T = object> {
  modelId?: string
  options?: LoadOptions<T>
}

export function createVLMWorker<
  T extends LoadOptions<object>,
>(createOptions: { baseURL?: string }) {
  if (!createOptions.baseURL) {
    throw new Error('baseURL is required')
  }

  const worker = createTransformersWorker({ workerURL: createOptions.baseURL })
  
  // Store callbacks
  let deviceCallback: ((device: string) => void) | undefined
  
  // Improved load function with better type safety
  const load = (modelId?: string, options?: T & { onDevice?: (device: string) => void }) => {
    // Store device callback if provided
    if (options && 'onDevice' in options && typeof options.onDevice === 'function') {
      deviceCallback = options.onDevice
    }
    
    let onProgress: LoadOptionProgressCallback | undefined
    if (options && 'onProgress' in options && typeof options.onProgress === 'function') {
      onProgress = options.onProgress
      // Create a clean copy without the callbacks
      const cleanOptions = { ...options }
      delete cleanOptions.onProgress
      delete (cleanOptions as any).onDevice
      return worker.load<Load>({ data: { modelId, options: cleanOptions }, type: 'load' }, { onProgress })
    }

    const cleanOptions = options ? { ...options } : {}
    if (cleanOptions) delete (cleanOptions as any).onDevice
    return worker.load<Load>({ data: { modelId, options: cleanOptions }, type: 'load' }, { onProgress })
  }

  // Enhanced process function with error handling
  const process = async (process: Process) => {
    try {
      const res = await worker.process<Process, ProcessResult>({ data: process, type: 'process' }, 'processResult')
      return res.data
    } catch (error) {
      console.error('[VLMWorker] Process error:', error)
      throw error
    }
  }
  
  // Expose method to handle device message
  const handleDeviceMessage = (device: string) => {
    if (deviceCallback) {
      deviceCallback(device)
    }
  }

  return {
    load,
    process,
    handleDeviceMessage,
    dispose: () => worker?.dispose(),
  }
}

export type VLMWorker = ReturnType<typeof createVLMWorker>