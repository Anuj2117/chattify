import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:6969",
        changeOrigin:true
      },
    },
  },
});
//https://chattify-vfz5.onrender.com