/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import { alias } from './alias'

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias,
  },
  test: {
    include: ['tests/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
  },
})
