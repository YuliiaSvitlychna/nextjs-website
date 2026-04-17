import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { categories, Type } from "./schema/categories";
import { posts, Status, type NewPost } from "./schema/posts";
import { sql } from "drizzle-orm";

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client, { schema });

async function main() {
  await db.execute(sql`TRUNCATE TABLE "posts" RESTART IDENTITY CASCADE`);
  await db.execute(sql`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`);

  const [tech] = await db
    .insert(categories)
    .values({ title: "Technology", slug: "technology", weight: 1 })
    .returning();
  const [lifestyle] = await db
    .insert(categories)
    .values({ title: "Lifestyle", slug: "lifestyle", type: Type.DisplayedSubcategories, weight: 2 })
    .returning();
  const [business] = await db
    .insert(categories)
    .values({ title: "Business", slug: "business", type: Type.DisplayedAll, weight: 3 })
    .returning();

  const [frontend] = await db
    .insert(categories)
    .values({
      title: "Frontend",
      slug: "frontend",
      parentId: tech.id,
      weight: 1,
    })
    .returning();
  const [backend] = await db
    .insert(categories)
    .values({
      title: "Backend",
      slug: "backend",
      parentId: tech.id,
      weight: 2,
    })
    .returning();
  const [devops] = await db
    .insert(categories)
    .values({
      title: "DevOps",
      slug: "devops",
      parentId: tech.id,
      weight: 3,
    })
    .returning();
  const [travel] = await db
    .insert(categories)
    .values({
      title: "Travel",
      slug: "travel",
      parentId: lifestyle.id,
      type: Type.DisplayedPosts,
      weight: 1,
    })
    .returning();
  const [health] = await db
    .insert(categories)
    .values({
      title: "Health",
      slug: "health",
      parentId: lifestyle.id,
      weight: 2,
    })
    .returning();
  const [startups] = await db
    .insert(categories)
    .values({
      title: "Startups",
      slug: "startups",
      parentId: business.id,
      weight: 1,
    })
    .returning();

  const seededPosts: NewPost[] = [
    {
      title: "Hello Drizzle",
      teaser: "Your first seeded post with Drizzle ORM.",
      slug: "hello-drizzle",
      body: "Your first seeded post using Drizzle ORM.",
      categoryId: tech.id,
      status: Status.Draft,
    },
    {
      title: "React in 2025",
      teaser: "A quick look at the React ecosystem in 2025.",
      slug: "react-in-2025",
      body: "State of React and the ecosystem.",
      categoryId: frontend.id,
    },
    {
      title: "Server Components",
      teaser: "What React Server Components change in app architecture.",
      slug: "server-components",
      body: "How RSC changes the way we build.",
      categoryId: frontend.id,
    },
    {
      title: "Node.js Best Practices",
      teaser: "Practical patterns for robust Node.js services.",
      slug: "node-best-practices",
      body: "Structuring and scaling Node backends.",
      categoryId: backend.id,
    },
    {
      title: "PostgreSQL Tips",
      teaser: "Small PostgreSQL optimizations with a big impact.",
      slug: "postgresql-tips",
      body: "Indexes, queries, and performance.",
      categoryId: backend.id,
    },
    {
      title: "Docker for Devs",
      teaser: "Using Docker to keep local development predictable.",
      slug: "docker-for-devs",
      body: "Local development with containers.",
      categoryId: devops.id,
    },
    {
      title: "CI/CD Basics",
      teaser: "A concise intro to continuous integration and delivery.",
      slug: "cicd-basics",
      body: "Automating deploy pipelines.",
      categoryId: devops.id,
    },
    {
      title: "Work & Life",
      teaser: "Ideas for healthier boundaries between work and rest.",
      slug: "work-and-life",
      body: "Thoughts on balancing work and life.",
      categoryId: lifestyle.id,
    },
    {
      title: "Weekend in Lisbon",
      teaser: "Short Lisbon itinerary for a fun weekend trip.",
      slug: "weekend-lisbon",
      body: "A short travel guide to Lisbon.",
      categoryId: travel.id,
    },
    {
      title: "Morning Routine",
      teaser: "Simple habits to start your day with more focus.",
      slug: "morning-routine",
      body: "Starting the day right.",
      categoryId: health.id,
    },
    {
      title: "Bootstrapping 101",
      teaser: "How to launch and grow without outside funding.",
      slug: "bootstrapping-101",
      body: "Building a business without VC.",
      categoryId: startups.id,
    },
    {
      title: "Pricing Your Product",
      teaser: "Core pricing strategies for early-stage products.",
      slug: "pricing-your-product",
      body: "How to think about pricing.",
      categoryId: business.id,
    },
  ];

  // Add 100 extra posts to Travel for pager testing
  for (let i = 1; i <= 100; i++) {
    const n = String(i).padStart(3, "0");
    seededPosts.push({
      title: `Travel Post ${n}`,
      teaser: `Travel teaser for seeded post #${i}.`,
      slug: `travel-post-${n}`,
      body: `Seeded travel post #${i} for pagination testing.`,
      categoryId: travel.id,
      createdAt: new Date(i),
    });
  }

  await db.insert(posts).values(seededPosts);
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
