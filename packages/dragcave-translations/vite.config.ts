import { defineConfig } from "vite";
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
  ],
  base: "./",
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      // https://vite.dev/guide/backend-integration.html
      input: "./src/index.ts",
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
