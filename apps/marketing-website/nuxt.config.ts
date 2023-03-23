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
    CACHE_STORAGE_BASE: process.env.CACHE_STORAGE_BASE || 'db',
    public: {
      BASE_URL: process.env.BASE_URL || 'https://localhost:3001/',
    },
  },

  // https://nitro.unjs.io/guide/storage
  nitro: {
    storage: {
      // To use this cache storage for production, set the env CACHE_STORAGE_BASE='upstash'
      upstash: {
        base: 'k9',
        driver: 'redis',
        url: process.env.UPSTASH_REDIS_CONN,
      },
    },

    // Use for development only. It will bypass storage configs above.
    devStorage: {
      db: {
        driver: 'fs',
        base: './.storage-cache/db',
      },
      docker: {
        base: 'test',
        driver: 'redis',
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
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
