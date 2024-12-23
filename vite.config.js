import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.VITE_BASENAME || "/";

export default {
  base: process.env.VERCEL ? '/' : '/Cara/', // Check if running on Vercel, otherwise use '/Cara/' for GitHub Pages
};


