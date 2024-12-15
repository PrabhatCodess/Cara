import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Cara/', // Replace <REPO_NAME> with your GitHub repository name
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        '/Cara/public/features/f2.png'
      ]
    }
  }
});

