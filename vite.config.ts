import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      name: "vite-plugin-fathom",
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
    },
  },
});
