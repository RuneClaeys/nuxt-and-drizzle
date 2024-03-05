import { eq } from 'drizzle-orm';
import { zh } from 'h3-zod';
import { books } from '~/database/schema';
import { createBookScheme } from '~/shared/models/book.interface';

export default defineEventHandler(async (event) => {
   const body = await zh.useValidatedBody(event, createBookScheme);

   const { lastInsertRowid } = await db.insert(books).values({ ...body });
   return db.query.books.findFirst({ where: eq(books.id, lastInsertRowid as number) });
});

