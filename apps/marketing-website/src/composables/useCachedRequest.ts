import type { Ref } from 'vue'
import { onScopeDispose, ref, unref, watchEffect } from 'vue'

const delay = (t: number) => new Promise(r => setTimeout(r, t)) // for testing only

export function useCachedRequest<T, U>(keySource: Ref<U>, getter: (key: U) => Promise<T>) {
  const data = ref<T>()
  const isLoading = ref(false)
  const isReady = ref(false)
  const error = ref<Error | undefined>()

  const cache = new Map<U, T>()

  onScopeDispose(() => {
    cache.clear()
  })

  watchEffect(async () => {
    const key = unref(keySource)
    isReady.value = false
    isLoading.value = true

    await delay(3000) // for testing only

    if (cache.has(key)) {
      data.value = cache.get(key)

      isReady.value = true
    }

    getter(key)
      .then((newData) => {
        cache.set(key, newData)
        data.value = newData
        isReady.value = true
      })
      .catch((err) => {
        error.value = err
      })
      .finally(() => {
        isLoading.value = false
      })
  })

  return { data, error, isLoading, isReady }
}
