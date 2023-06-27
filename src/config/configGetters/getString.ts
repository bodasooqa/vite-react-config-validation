export const getString = (
  target: Record<string, unknown>,
  key: string,
): string => {
  const strValue = target[key];

  try {
    if (typeof strValue === 'string') return strValue;

    throw new Error();
  } catch {
    throw new Error(`Config value for "${key}" is not a string: "${strValue}"`);
  }
};
