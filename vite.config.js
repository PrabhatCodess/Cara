import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Cara/', // Ensures assets are resolved from /Cara/
  plugins: [react()]
});

