import { relations, sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const books = sqliteTable('books', {
   id: integer('id').primaryKey(),
   title: text('title').notNull(),
   author: text('author').notNull(),
   createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
   updated_at: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const bookRelations = relations(books, ({ many }) => ({
   chapters: many(chapters),
}));

export const chapters = sqliteTable('chapters', {
   id: integer('id').primaryKey(),
   bookId: integer('book_id')
      .notNull()
      .references(() => books.id),
   content: text('content').notNull(),
   title: text('title').notNull(),
   createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
   updated_at: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const chapterRelations = relations(chapters, ({ one }) => ({
   book: one(books),
}));

