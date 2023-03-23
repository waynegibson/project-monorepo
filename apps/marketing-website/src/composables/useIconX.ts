import type { IconComponent, IconLibrary } from '../common/types'
import iconLibrary from '~/common/icon-library.config'

export default (T: any, fallback = 'face-smile'): IconComponent => {
  if (typeof T === 'undefined' || T === null)
    return

  const icons: IconLibrary = { ...iconLibrary }
  const icon = icons[T] ?? icons[fallback]

  return markRaw(icon)
}
