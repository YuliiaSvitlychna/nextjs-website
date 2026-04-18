import { posts, Post, Status } from "../schema/posts";
import { db } from "../client";
import { eq, desc, sql, and } from "drizzle-orm";
import { POSTS_PER_PAGE } from "@/config";

export default async function getPostsByCategoryId(
  categoryId: string,
  page: number,
): Promise<{ posts: Post[]; totalCount: number }> {
  const result = await db
    .select({
      post: posts,
      totalCount: sql<number>`count(*) OVER()`.mapWith(Number),
    })
    .from(posts)
    .where(and(eq(posts.categoryId, categoryId), eq(posts.status, Status.Published)))
    .orderBy(desc(posts.createdAt))
    .limit(POSTS_PER_PAGE)
    .offset((page - 1) * POSTS_PER_PAGE);

  return {
    posts: result.map((obj) => obj.post),
    totalCount: result.length ? result[0].totalCount : 0,
  };
}
