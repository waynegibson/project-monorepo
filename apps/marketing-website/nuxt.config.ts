/* eslint-disable turbo/no-undeclared-env-vars */
export default defineNuxtConfig({
  srcDir: 'src/',

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    // '@project/nuxt-webkit-module', // this module is not working. git checkout a31cd94
    '@vueuse/nuxt',
    'unplugin-icons/nuxt',
  ],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://localhost:3001/',
    },
  },

  // https://nitro.unjs.io/guide/storage
  nitro: {
    // Production
    storage: {
      db: {
        base: process.env.CACHE_BASE_KEY,
        driver: process.env.CACHE_DRIVER,
        host: process.env.CACHE_HOST,
        port: process.env.CACHE_PORT,
        password: process.env.CACHE_PASSWORD,
        db: 0,
      },
    },
    devStorage: {
      db: {
        driver: 'fs',
        base: './.cache-data/db',
      },
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },

  // webkit: {
  //   prefix: 'webkit',
  // },

  typescript: {
    strict: true,
    shim: false,
    typeCheck: false,
  },
})
