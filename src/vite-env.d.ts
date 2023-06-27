/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: number;
  readonly VITE_SHOW_VERSION: boolean;
  readonly VITE_COMMENTED_REQUIRED_VALUE: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}