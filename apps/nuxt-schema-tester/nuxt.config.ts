import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],

  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
  },

  typescript: {
    strict: true,
    shim: false,
    typeCheck: false,
  },
})
