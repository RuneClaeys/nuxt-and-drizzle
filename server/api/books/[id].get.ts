import { eq } from 'drizzle-orm';
import { zh } from 'h3-zod';
import { books } from '~/database/schema';

export default defineEventHandler(async (event) => {
   const params = await zh.useValidatedParams(event, {
      id: zh.intAsString,
   });

   return db.query.books.findFirst({ where: eq(books.id, params.id) });
});

