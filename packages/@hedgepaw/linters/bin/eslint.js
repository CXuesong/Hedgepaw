const eslintApiPath = import.meta.resolve("eslint");
const eslintBinPath = new URL("../bin/eslint.js", eslintApiPath);
await import(eslintBinPath);
