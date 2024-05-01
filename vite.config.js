import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
    proxy: {
      "/api": {
        target: "https://api.igdb.com/v4",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          "Client-ID": "afpb4kqzcdyb8k79dlwimcaxuabgk3",
          Authorization: "Bearer 5oehm8u6ueavv4rxi67psiossu1q72",
        },
      },
    },
  },
});
