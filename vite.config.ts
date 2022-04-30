import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [process.env.NODE_ENV === 'test' ? vue() : undefined],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // additionalData: '@import "@/assets/styles/_variables.sass"',
  //       additionalData: '@import "./assets/styles/main.scss";',
  //     },
  //   },
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./components/**/*.test.ts'],
    setupFiles: ['.vitest/setup.ts'],
  },
});
