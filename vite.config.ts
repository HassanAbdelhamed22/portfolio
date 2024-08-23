import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    compression({
      algorithm: "gzip", // Use 'gzip' for Gzip compression
      threshold: 1024, // Compress files larger than 1KB
    }),
    compression({
      algorithm: "brotliCompress", // Use 'brotliCompress' for Brotli compression
      threshold: 1024, // Compress files larger than 1KB
    }),
  ],
});
