import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
      supported: {
        bigint: true,
      },
    },
  },
  build: {
    target: "esnext",
  },
});
