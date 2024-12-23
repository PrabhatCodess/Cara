import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  base: process.env.VITE_APP_ENV === 'production' ? '/Cara/' : '/',
});
