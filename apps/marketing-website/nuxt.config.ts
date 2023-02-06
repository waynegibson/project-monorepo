export default defineNuxtConfig({
  srcDir: 'src/',

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  typescript: {
    strict: true,
    shim: false,
    typeCheck: false,
  },
})
