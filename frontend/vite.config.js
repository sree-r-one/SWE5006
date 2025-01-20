import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic", // Add this line
    }),
  ],
  resolve: {
    alias: {
      uuid: "uuid/dist/index.js",
    },
  },
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
