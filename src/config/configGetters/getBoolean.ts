export const getBoolean = (
  target: Record<string, unknown>,
  key: string,
): boolean => {
  const value = target[key];

  try {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;

    throw new Error();
  } catch {
    throw new Error(`Config value for "${key}" is not a boolean: "${value}"`);
  }
};
