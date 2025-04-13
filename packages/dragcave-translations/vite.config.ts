import fs from "fs";
import { defineConfig, Plugin } from "vite";
import banner from "vite-plugin-banner";
import { checker } from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(env => {
  const isProduction = env.mode?.toLowerCase() === "prod";
  const scriptVersion = (() => {
    const now = new Date();
    const v = now.toISOString().split("T")[0] + `.${now.getUTCHours()}.${now.getUTCMinutes()}`;
    if (isProduction) return v;
    return `${v}.dev.${Date.now()}`;
  })();

  console.log("isProduction: ", isProduction);
  console.log("scriptVersion: ", scriptVersion);

  return {
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
          template = template.replaceAll("$VERSION_TS$", scriptVersion);
          return template;
        },
      }),
      importHtmlSource,
    ],
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

const importHtmlSource: Plugin = {
  name: "htmlImport",
  /**
   * Checks to ensure that a html file is being imported.
   * If it is then it alters the code being passed as being a string being exported by default.
   * @param code The file as a string.
   * @param id The absolute path. 
   */
  transform: (code, id) => {
    if (id.match(/\.html$/ig)) {
      code = `export default ${JSON.stringify(code)};`;
    }
    return { code };
  },
};
