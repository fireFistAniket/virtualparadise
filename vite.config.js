import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: [
    "favicon.ico",
    "apple-touch-icon.png",
    "android-chrome-512x512.png",
  ],
  manifest: {
    name: "VirtualParadise",
    short_name: "VirtualParadise",
    description:
      "Explore VirtualParadise, your ultimate destination for discovering and exploring a vast collection of games.",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  build: {
    outDir: "dist",
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
});
