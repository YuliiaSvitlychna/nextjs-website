import { categories, Category } from "../schema/categories";
import { db } from "../client";
import { eq } from "drizzle-orm";

export default async function getSubcategoriesByCategoryId(
  categoryId: string,
): Promise<Category[]> {
  return db.select().from(categories).where(eq(categories.parentId, categoryId));
}
