ALTER TABLE "categories" ADD COLUMN "seo_description" text;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "og_image" varchar(1024);--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "is_sitemap" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "seo_description" text;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "og_image" varchar(1024);--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "is_sitemap" boolean DEFAULT true;