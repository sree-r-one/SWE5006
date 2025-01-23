import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development or production)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react({
        jsxRuntime: "classic",
      }),
    ],
    resolve: {
      alias: {
        uuid: "uuid/dist/index.js",
      },
    },
    server: {
      host: true,
      port: 3000, // Keep this for development
      watch: {
        usePolling: true,
      },
    },
    build: {
      // Add build configuration for production
      outDir: "dist",
      // outDir: "build",
      emptyOutDir: true,
      sourcemap: false, // Disable sourcemaps in production
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            // Add other vendor libraries you want to separate into chunks here
          },
        },
      },
      // Consider adding minification and other optimizations
      // minify: 'terser', // Use Terser for minification
      // terserOptions: { ... }, // Customize Terser options if needed
    },
    base: env.VITE_BASE_URL || "/",
  };
});
