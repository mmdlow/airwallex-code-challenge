/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const dirname = fileURLToPath(new URL('src', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    setupFiles: [resolve(dirname, './__tests__/setup.ts')],
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
  },
});
