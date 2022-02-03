import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
  resolve: {
    extensions: [".mjs", ".js", ".json", ".vue"],
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
