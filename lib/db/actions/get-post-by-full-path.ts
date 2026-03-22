import { db } from "../client";
import { categories } from "../schema/categories";
import { posts, Post } from "../schema/posts";
import { sql } from "drizzle-orm";

export default async function getPostByFullPath(slugs: string[]): Promise<Post | null> {
  if (slugs.length === 0) return null;

  const postSlug = slugs.pop();
  const categoryPath = slugs.join("/");

  try {
    const rows = await db.execute(sql`
      WITH RECURSIVE category_tree AS (
        SELECT 
            id, 
            slug, 
            parent_id, 
            slug::text AS full_path
        FROM ${categories}
        WHERE parent_id IS NULL

        UNION ALL

        SELECT 
            c.id, 
            c.slug, 
            c.parent_id, 
            (ct.full_path || '/' || c.slug)::text
        FROM ${categories} c
        JOIN category_tree ct ON c.parent_id = ct.id
      )
      SELECT 
          p.* FROM ${posts} p
      JOIN category_tree ct ON p.category_id = ct.id
      WHERE p.slug = ${postSlug} 
        AND ct.full_path = ${categoryPath}
      LIMIT 1;
    `);

    if (!rows || rows.length === 0) {
      return null;
    }

    return rows[0] as Post;
  } catch (error) {
    console.error("Error while searching for post by path:", error);
    return null;
  }
}
