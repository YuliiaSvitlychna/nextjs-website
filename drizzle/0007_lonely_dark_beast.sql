CREATE TABLE "authors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"bio" text,
	"job_title" varchar(255) NOT NULL,
	"avatar_url" varchar(1024),
	"mini_avatar_url" varchar(1024),
	"github_url" varchar(255),
	"linkedin_url" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "posts_authors" (
	"post_id" uuid NOT NULL,
	"author_id" uuid NOT NULL,
	CONSTRAINT "posts_authors_post_id_author_id_pk" PRIMARY KEY("post_id","author_id")
);
--> statement-breakpoint
ALTER TABLE "posts_authors" ADD CONSTRAINT "posts_authors_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts_authors" ADD CONSTRAINT "posts_authors_author_id_authors_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;