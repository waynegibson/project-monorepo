import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@project/nuxt-webkit-module'],

  webkit: {
    prefix: 'webkit',
  },
})
