CREATE TABLE `books` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
