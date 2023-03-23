import type { FunctionalComponent } from 'vue'

/** ICON LIBRARY */
export type IconLibrary = {
  [key: string]: FunctionalComponent
}

export type IconComponent = FunctionalComponent | undefined | null
