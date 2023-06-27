export const getNumber = (
  target: Record<string, unknown>,
  key: string,
): number => {
  const value = target[key];

  try {
    const numValue = Number(value);

    if (isFinite(numValue) && !isNaN(numValue)) return numValue;

    throw new Error();
  } catch {
    throw new Error(`Config value for "${key}" is not a number: "${value}"`);
  }
};
