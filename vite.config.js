import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://benevolent-pithivier-91fd85.netlify.app/",
  plugins: [react()],
});
