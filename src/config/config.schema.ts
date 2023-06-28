import { z } from 'zod';

const configSchema = z.object({
  APP_TITLE: z.string(),
  APP_VERSION: z.coerce.number(),
  SHOW_VERSION: z.coerce.boolean(),
  COMMENTED_REQUIRED_VALUE: z
    .string()
    .transform((val) => JSON.parse(val))
    .pipe(
      z
        .object({
          solution: z.string(),
          rate: z.enum(['A', 'B']),
        })
        .array(),
    ),
});

export const parseConfig = (configObj: Record<string, unknown>) => {
  const parseResult = configSchema.safeParse(configObj);

  if (!parseResult.success) throw parseResult.error;

  return parseResult.data;
};
