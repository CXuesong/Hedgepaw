// @ts-check
import * as MyLinters from "@hedgepaw/linters";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...MyLinters.ESLintRules.baseConfig,
  ...MyLinters.ESLintRules.svelteConfig("./svelte.config.js"),
);
