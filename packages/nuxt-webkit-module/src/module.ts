import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addComponentsDir, defineNuxtModule } from '@nuxt/kit'

export interface NuxtWebKitOptions {
  /**
   * @experimental
   * @default webkit
   */
  prefix?: string
}

export default defineNuxtModule<NuxtWebKitOptions>({
  meta: {
    name: '@project/nuxt-webkit-module',
    configKey: 'webkit',
    compatibility: {
      nuxt: '^3.2.0',
    },
  },

  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.build.transpile.push(runtimeDir)

    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      pathPrefix: false,
      prefix: options?.prefix ? options.prefix : 'webkit',
      global: true,
    })

    // nuxt.hook('components:dirs', (dirs) => {
    //   dirs.push({
    //     path: resolve(runtimeDir, 'components'),
    //     prefix: options?.prefix ? options.prefix : 'webkit',
    //   })
    // })

    // Add composables
    // nuxt.hook('imports:dirs', (dirs) => {
    //   dirs.push(resolve(runtimeDir, 'composables'))
    // })
  },
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    webkit?: NuxtWebKitOptions
  }
  interface NuxtOptions {
    webkit?: NuxtWebKitOptions
  }
}
