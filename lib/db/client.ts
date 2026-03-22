import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { categories } from "./schema/categories";
import { posts } from "./schema/posts";

const client = postgres(process.env.DATABASE_URL!);

export const db = drizzle(client, {
  schema: {
    posts,
    categories,
  },
});
