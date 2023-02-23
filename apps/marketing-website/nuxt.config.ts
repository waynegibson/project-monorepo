export default defineNuxtConfig({
  srcDir: 'src/',

  modules: [
    '@nuxtjs/tailwindcss',
    '@project/nuxt-webkit-module',
    '@vueuse/nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },

  webkit: {
    prefix: 'webkit',
  },

  typescript: {
    strict: true,
    shim: false,
    typeCheck: false,
  },
})
