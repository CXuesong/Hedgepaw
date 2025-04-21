import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  /** @type {import("svelte/compiler").CompileOptions} */
  compilerOptions: {
  },
};

export default config;
