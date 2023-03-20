export default defineNuxtConfig({
  srcDir: 'src/',

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    // '@project/nuxt-webkit-module', // this module is not working. git checkout a31cd94
    '@vueuse/nuxt',
  ],

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
