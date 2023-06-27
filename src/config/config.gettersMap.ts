import type { Config } from './config.types.ts';

import { getString } from './configGetters/getString.ts';
import { getNumber } from './configGetters/getNumber.ts';
import { getBoolean } from './configGetters/getBoolean.ts';

export const CONFIG_GETTERS_MAP: {
  [K in keyof Config]: (target: Record<string, unknown>, key: K) => Config[K];
} = {
  APP_TITLE: getString,
  APP_VERSION: getNumber,
  SHOW_VERSION: getBoolean,
  COMMENTED_REQUIRED_VALUE: getString
};
