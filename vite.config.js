import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Cara/' : '/',
});
