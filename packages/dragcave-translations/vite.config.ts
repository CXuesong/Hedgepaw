// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./src/types.d.ts" />
import { asDefineReplacements, getGitHead } from "@hedgepaw/build-utils";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from "fs";
import { defineConfig, PluginOption, UserConfig } from "vite";
import banner from "vite-plugin-banner";
import { checker } from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(async (env): Promise<UserConfig> => {
  const isProduction = env.mode?.toLowerCase() === "prod";
  const buildInfo = await makeAppBuildInfo(isProduction);

  console.log("AppBuildInfo: ", buildInfo);

  return {
    plugins: [
      tsconfigPaths({ loose: true }),
      svelte(),
      checker({
        typescript: {
          tsconfigPath: "./src/tsconfig.json",
        },
      }),
      banner({
        content: () => {
          let template = fs.readFileSync("./assets/banner.js", { encoding: "utf-8" });
          template = template.replaceAll("__APP_BUILD_INFO__.scriptVersion", buildInfo.scriptVersion);
          return template;
        },
      }) as PluginOption,
      // Not using htmlImport (custom) plugin due to https://github.com/vitejs/vite/issues/4067
    ],
    define: {
      ...asDefineReplacements(buildInfo),
    },
    base: "./",
    build: {
      outDir: "./dist",
      emptyOutDir: true,
      // minify: false,
      rollupOptions: {
        // https://vite.dev/guide/backend-integration.html
        input: "./src/main.ts",
        output: {
          format: "iife",
          inlineDynamicImports: true,
          entryFileNames: "dragcave-translations-tm.js",
        },
      },
    },
  };
});

async function makeAppBuildInfo(isProduction: boolean): Promise<AppBuildInfo> {
  const scriptVersion = (() => {
    const now = new Date();
    const v = now.toISOString().split("T")[0] + `.${now.getUTCHours()}.${now.getUTCMinutes()}`;
    if (isProduction) return v;
    return `${v}.dev.${Date.now()}`;
  })();
  const commitId = await getGitHead();
  return {
    isProduction,
    scriptVersion,
    buildTimestamp: new Date().toISOString(),
    commitId,
  };
}
