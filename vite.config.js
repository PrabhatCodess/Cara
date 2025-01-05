import { defineConfig } from 'vite';

export default defineConfig({
   base: "/",
  build: {
      rollupOptions: {
          output: {
              assetFileNames: 'assets/[name]-[hash].[ext]',
              chunkFileNames: 'assets/[name]-[hash].js',
              entryFileNames: 'assets/[name]-[hash].js',
          },
      },
  },
});