import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { categories } from "./schema/categories";
import { posts } from "./schema/posts";
import { sql } from "drizzle-orm";

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client, {
  schema: {
    posts,
    categories,
  },
});

async function main() {
  await db.execute(sql`TRUNCATE TABLE "posts" RESTART IDENTITY CASCADE`);
  await db.execute(sql`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`);

  const [tech] = await db
    .insert(categories)
    .values({ title: "Technology", slug: "technology" })
    .returning();
  const [lifestyle] = await db
    .insert(categories)
    .values({ title: "Lifestyle", slug: "lifestyle", type: "displayed-subcategories" })
    .returning();
  const [business] = await db
    .insert(categories)
    .values({ title: "Business", slug: "business", type: "displayed-all" })
    .returning();

  const [frontend] = await db
    .insert(categories)
    .values({
      title: "Frontend",
      slug: "frontend",
      parentId: tech.id,
    })
    .returning();
  const [backend] = await db
    .insert(categories)
    .values({
      title: "Backend",
      slug: "backend",
      parentId: tech.id,
    })
    .returning();
  const [devops] = await db
    .insert(categories)
    .values({
      title: "DevOps",
      slug: "devops",
      parentId: tech.id,
    })
    .returning();
  const [travel] = await db
    .insert(categories)
    .values({
      title: "Travel",
      slug: "travel",
      parentId: lifestyle.id,
      type: "displayed-posts",
    })
    .returning();
  const [health] = await db
    .insert(categories)
    .values({
      title: "Health",
      slug: "health",
      parentId: lifestyle.id,
    })
    .returning();
  const [startups] = await db
    .insert(categories)
    .values({
      title: "Startups",
      slug: "startups",
      parentId: business.id,
    })
    .returning();

  await db.insert(posts).values([
    {
      title: "Hello Drizzle",
      slug: "hello-drizzle",
      body: "Your first seeded post using Drizzle ORM.",
      categoryId: tech.id,
      status: "draft",
    },
    {
      title: "React in 2025",
      slug: "react-in-2025",
      body: "State of React and the ecosystem.",
      categoryId: frontend.id,
    },
    {
      title: "Server Components",
      slug: "server-components",
      body: "How RSC changes the way we build.",
      categoryId: frontend.id,
    },
    {
      title: "Node.js Best Practices",
      slug: "node-best-practices",
      body: "Structuring and scaling Node backends.",
      categoryId: backend.id,
    },
    {
      title: "PostgreSQL Tips",
      slug: "postgresql-tips",
      body: "Indexes, queries, and performance.",
      categoryId: backend.id,
    },
    {
      title: "Docker for Devs",
      slug: "docker-for-devs",
      body: "Local development with containers.",
      categoryId: devops.id,
    },
    {
      title: "CI/CD Basics",
      slug: "cicd-basics",
      body: "Automating deploy pipelines.",
      categoryId: devops.id,
    },
    {
      title: "Work & Life",
      slug: "work-and-life",
      body: "Thoughts on balancing work and life.",
      categoryId: lifestyle.id,
    },
    {
      title: "Weekend in Lisbon",
      slug: "weekend-lisbon",
      body: "A short travel guide to Lisbon.",
      categoryId: travel.id,
    },
    {
      title: "Morning Routine",
      slug: "morning-routine",
      body: "Starting the day right.",
      categoryId: health.id,
    },
    {
      title: "Bootstrapping 101",
      slug: "bootstrapping-101",
      body: "Building a business without VC.",
      categoryId: startups.id,
    },
    {
      title: "Pricing Your Product",
      slug: "pricing-your-product",
      body: "How to think about pricing.",
      categoryId: business.id,
    },
  ]);
}

main()
  .then(() => {
    console.log("Seed completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
