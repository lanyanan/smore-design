/// <reference types="vitest" />

import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue() as Plugin],
  test: {
    // jest like test api
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    deps: {
      inline: ['vitest-canvas-mock']
    },
    threads: false,
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        resources: 'usable'
      }
    },
    // 支持tsx,jsx
    transformMode: {
      web: [/.[tj]sx$/]
    },
    typecheck: {
      ignoreSourceErrors: false
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
