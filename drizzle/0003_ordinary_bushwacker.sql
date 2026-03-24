CREATE TYPE "public"."category_type" AS ENUM('hidden', 'displayed-all', 'displayed-posts', 'displayed-subcategories');--> statement-breakpoint
CREATE TYPE "public"."post_status" AS ENUM('published', 'draft');--> statement-breakpoint
ALTER TABLE "categories" ALTER COLUMN "type" SET DEFAULT 'hidden'::"public"."category_type";--> statement-breakpoint
ALTER TABLE "categories" ALTER COLUMN "type" SET DATA TYPE "public"."category_type" USING "type"::"public"."category_type";--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "status" SET DEFAULT 'published'::"public"."post_status";--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "status" SET DATA TYPE "public"."post_status" USING "status"::"public"."post_status";