import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  author: text("author"),
});

export const bookRelations = relations(books, ({ many }) => ({
  chapters: many(chapters),
}));

export const chapters = pgTable("chapters", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  bookId: serial("book_id"),
});

export const chapterRelations = relations(chapters, ({ one }) => ({
  book: one(books),
}));
