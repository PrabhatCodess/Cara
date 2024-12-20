import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensures assets are resolved from /Cara/
  plugins: [react()]
});

