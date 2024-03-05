import { z } from 'zod';
import { books } from '~/database/schema';

export const createBookScheme = z.object({ title: z.string(), author: z.string() });
export type CreateBook = z.infer<typeof createBookScheme>;
export type Book = typeof books.$inferSelect;

