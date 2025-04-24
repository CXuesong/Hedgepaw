/// <reference types="vite/client" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  /** @deprecated */
  readonly placeholder: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface AppBuildInfo {
  isProduction: boolean;
  scriptVersion: string;
  commitId: string;
  buildTimestamp: string;
}

declare const __APP_BUILD_INFO__: AppBuildInfo;
