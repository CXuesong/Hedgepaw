import fs from "fs";
import { defineConfig } from "vite";
import banner from "vite-plugin-banner";
import { checker } from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({ loose: true }),
    checker({
      typescript: {
        tsconfigPath: "./src/tsconfig.json",
      },
    }),
    banner({
      content: () => {
        let template = fs.readFileSync("./assets/banner.js", { encoding: "utf-8" });
        template = template.replaceAll("$VERSION_TS$", new Date().toISOString().split("T")[0]);
        return template;
      },
    }),
  ],
  base: "./",
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    // minify: false,
    rollupOptions: {
      // https://vite.dev/guide/backend-integration.html
      input: "./src/index.ts",
      output: {
        format: "iife",
        inlineDynamicImports: true,
        entryFileNames: "dragcave-translations-tm.js",
      },
    },
  },
});
