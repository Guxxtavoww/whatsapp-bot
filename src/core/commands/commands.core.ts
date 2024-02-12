import { z } from 'zod';

export const commandsSchema = z.union([
  z.literal('!ping'),
  z.literal('!get-data'),
]);

export type Commands = z.infer<typeof commandsSchema>;
