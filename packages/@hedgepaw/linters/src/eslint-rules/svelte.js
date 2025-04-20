//@ts-check
import svelte from 'eslint-plugin-svelte';
import tseslint from "typescript-eslint";

/**
 * @param {string} svelteConfigPath 
 * @returns 
 */
export const svelteConfig = (svelteConfigPath) => {
  return tseslint.config(
    ...svelte.configs.recommended,
    {
      files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
      // See more details at: https://typescript-eslint.io/packages/parser/
      languageOptions: {
        parserOptions: {
          projectService: true,
          extraFileExtensions: [".svelte"],
          parser: tseslint.parser,
          svelteConfig: svelteConfigPath,
        }
      }
    },
    {
      rules: {
      }
    }
  )
}
