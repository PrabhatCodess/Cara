import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.VITE_BASENAME || "/";

export default defineConfig({
  plugins: [react()],
  base: base,
});
