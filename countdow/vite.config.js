import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

export default {
  rollupPlugins: {
    sass: {
      processor: sass,
    },
  },
  // other configuration options here
  plugins: [react()],
};

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
