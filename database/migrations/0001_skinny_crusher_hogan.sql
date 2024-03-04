CREATE TABLE `chapters` (
	`id` integer PRIMARY KEY NOT NULL,
	`book_id` integer NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
ALTER TABLE books ADD `updated_at` text DEFAULT CURRENT_TIMESTAMP;