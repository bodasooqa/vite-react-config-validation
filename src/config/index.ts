import { buildEnvProxy } from './buildEnvProxy.ts';
import { buildConfigProxy } from './buildConfigProxy.ts';
import { CONFIG_GETTERS_MAP } from './config.gettersMap.ts';

import type { Config } from './config.types.ts';

const ENV = buildEnvProxy<Record<string, unknown>>(
  import.meta.env,
  (key) => `VITE_${key}`,
);

export const CONFIG = buildConfigProxy<Config>({
  env: ENV,
  envGettersMap: CONFIG_GETTERS_MAP,
});
