import ss from '@sindresorhus/slugify'

/**
 * Slugify a string.
 * Useful for URLs, filenames, and IDs.
 *
 * https://github.com/sindresorhus/slugify
 *
 * @param value
 * @param options
 * @returns
 */
export const slugify = (value: string, options?: {}): string => {
  const config = {
    separator: '-',
    lowercase: true,
    decamelize: true,
    ...options,
  }

  const result = ss(value, config)

  return result
}
