export default defineEventHandler(async () => {
   const books = await db.query.books.findMany();

   return books;
});

