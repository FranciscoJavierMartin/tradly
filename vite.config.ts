import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./components/**/*.test.ts'],
    setupFiles: ['.vitest/setup.ts'],
  },
});
