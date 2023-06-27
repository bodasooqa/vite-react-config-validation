export const buildConfigProxy = <T extends Record<string, unknown>>({
  env,
  envGettersMap,
}: {
  env: Record<string, unknown>;
  envGettersMap: {
    [K in keyof T]: (target: Record<string, unknown>, key: K) => T[K];
  };
}) =>
  new Proxy({} as T, {
    get(_, key) {
      const keyStr = String(key);
      const getter = envGettersMap[keyStr];

      if (!getter || typeof getter !== 'function') {
        throw new Error(`Config: Proxy getter for "${keyStr}" is not defined`);
      }

      return getter(env, keyStr);
    },
  });
