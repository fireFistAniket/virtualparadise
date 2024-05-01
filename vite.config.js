import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    base: "/virtualparadise/",
    server: {
      cors: false,
      proxy: {
        "/api": {
          target: "https://api.igdb.com/v4",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
          headers: {
            "Client-ID": env.VITE_SERVER_CLIENT_ID,
            Authorization: `Bearer ${env.VITE_SERVER_ACCESS_TOKEN}`,
          },
        },
      },
    },
  };
});
