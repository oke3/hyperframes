/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HF_DEPLOY_TARGET?: "gh-pages" | string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
