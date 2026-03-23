import { posts, Post } from "../schema/posts";
import { db } from "../client";
import { eq } from "drizzle-orm";

export default async function getPostsByCategoryId(categoryId: string): Promise<Post[]> {
  return db.select().from(posts).where(eq(posts.categoryId, categoryId));
}
