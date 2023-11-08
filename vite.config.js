import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
  },
  // build: {
  //   rollupOptions: {
  //     external: [
  //       "core-js-pure/stable/object/assign.js",
  //       "core-js-pure/stable/instance/concat.js",
  //       "core-js-pure/stable/reflect/construct.js",
  //     ],
  //   },
  // },
});
