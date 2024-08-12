import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from "vite-plugin-vuetify";
import eslintPlugin from "vite-plugin-eslint";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    eslintPlugin(),
    cssInjectedByJsPlugin()
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'esnext',

    lib: {
      entry: './src/main.js',
      name: 'vuetify-date-range-picker',
      fileName: 'vuetify-date-range-picker'
    },

    rollupOptions: {
      external: [
        "vue",
        "pinia",
        "vuetify",
        "vuetify/lib"
      ],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        }
      },
    }
  }
})
