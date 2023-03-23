type TransactionOptions = Record<string, any>

const config = useRuntimeConfig()
const base = config.CACHE_STORAGE_BASE

/**
 * Set the item in the cache by it's key.
 *
 * @param key
 * @param fetcher
 * @param opts
 * @returns
 */
const setItem = async <T>(key: string, fetcher: () => T, opts?: TransactionOptions): Promise<T> => {
  const value = await fetcher()

  await useStorage(base).setItem(key, JSON.stringify(value), opts)

  return value
}

/**
 * Get the item from the cache by it's key.
 *
 * @param key
 * @returns
 */
const getItem = async <T>(key: string): Promise<T | null> => {
  const value = await useStorage(base).getItem(key)

  return value === null
    ? null
    : value as T
}

/**
 * Remove the item from the cache by it's key.
 *
 * @param key
 */
const removeItem = async (key: string): Promise<void> => {
  await useStorage(base).removeItem(key)
}

/**
 * Fetch the item from the cache or make the api fetch call,
 * then add the item to the cache.
 *
 * @param key
 * @param fetcher
 * @param opts
 * @returns
 */
const fetch = async <T>(key: string, fetcher: () => T, opts?: TransactionOptions): Promise<T> => {
  const existing = await getItem<T>(key)

  return existing !== null
    ? existing
    : await setItem<T>(key, fetcher, opts)
}

export default { fetch, setItem, getItem, removeItem }
