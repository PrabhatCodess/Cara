import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.VITE_BASENAME || "/";

export default {
  define: {
    'process.env': process.env
  },
  // Other configurations...
};


