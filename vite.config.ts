import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/TRACTIAN_Landing_Page/",
  plugins: [react()],
});

