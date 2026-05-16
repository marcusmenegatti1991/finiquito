import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

/**
 * Configuración de Vite para producción (Cloudflare Pages)
 * Sin plugins de desarrollo (Manus, debug collector, etc.)
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Dividir vendor chunks para mejor caché
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-tooltip", "@radix-ui/react-tabs", "@radix-ui/react-accordion"],
        },
      },
    },
  },
});
