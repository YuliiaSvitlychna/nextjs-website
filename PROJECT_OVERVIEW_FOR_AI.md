## Overview

This repository is a minimal **Next.js App Router** project that is being turned into a simple **blog** backed by **PostgreSQL** using **Drizzle ORM** for schema-as-code and migrations.

At the moment, the UI is still the default Next.js starter page, but the data model and seeding script for blog content are already set up.

Use this document as system / context for an AI assistant (e.g. Claude Desktop) so it understands the intent and architecture of the project.

---

## Tech Stack

- **Framework**: Next.js `app/` router (`app/page.tsx`, `app/layout.tsx`)
- **Language**: TypeScript
- **Runtime**: Node.js
- **Frontend**:
  - React
  - Tailwind-like utility classes in `app/page.tsx` (via `globals.css` / Tailwind 4)
  - Google fonts via `next/font` (`Geist`, `Geist_Mono`)
- **Database**:
  - PostgreSQL
  - Drizzle ORM (`drizzle-orm`) with `drizzle-kit` for migrations
  - Connection string is provided via `DATABASE_URL` env variable
- **Tooling**:
  - ESLint (`eslint` + `eslint-config-next`)
  - Prettier
  - `tsx` for running TypeScript scripts (e.g. DB seeding)

---

## Project Intent

The goal of this project is to build a **blog** with:

- A **Postgres schema** managed by **Drizzle ORM**
- A set of **seeded categories and posts**
- Next.js pages that:
  - Show a list of all blog posts (titles, and potentially links via `slug`)
  - Later: show individual post pages and category-based navigation

Right now, only the schema and seed data are implemented; the UI is still the stock Next.js starter.

---

## Important Files and Directories

- `app/`
  - `layout.tsx`
    - Root layout for the App Router.
    - Configures fonts (`Geist`, `Geist_Mono`) and wraps the app body.
    - Exports basic `metadata` (`title: "Create Next App"` for now).
  - `page.tsx`
    - Current home page.
    - Still the default Next.js starter UI with a hero section and links to documentation/templates.
    - Uses `next/image` and Tailwind-style utility classes.
  - `db/`
    - `schema.ts`
      - Drizzle ORM schema definition for:
        - `categories` table (with optional parent category)
        - `posts` table (with foreign key to `categories`)

- `scripts/`
  - `seed.ts`
    - Node script to **reset** and **seed** the database using Drizzle + `pg`.
    - Connects to Postgres using `DATABASE_URL`.
    - Truncates `posts` and `categories`.
    - Creates a set of root and nested categories.
    - Inserts multiple sample blog posts across those categories.

- Root files
  - `package.json`
    - Defines Next.js app scripts and Drizzle scripts:
      - `dev`, `build`, `start`, `lint`
      - `db:gen`, `db:push`, `db:pull`, `db:studio`
      - `db:seed` (`tsx scripts/seed.ts`)
    - Declares dependencies: `next`, `react`, `react-dom`, `drizzle-orm`, `pg`, etc.
  - `drizzle.config.ts`
    - Drizzle Kit configuration pointing to `./app/db/schema.ts`.
    - Uses Postgres dialect with `DATABASE_URL` credentials.

---

## Database Schema (High Level)

Defined in `app/db/schema.ts` using Drizzle's `pgTable`:

- **Table: `categories`**
  - `id` (`uuid`, primary key, default random)
  - `title` (`varchar(255)`, not null)
  - `slug` (`varchar(255)`, not null)
  - `parentId` (`uuid`, nullable, self-referencing FK)
  - **Indexes**:
    - `categories_slug_idx` on `slug` (Note: **not unique** since paths resolve by traversing parents)
    - `categories_parent_id_idx` on `parentId`
  - Used to represent both root categories and nested categories (via `parentId`).

- **Table: `posts`**
  - `id` (`uuid`, primary key, default random)
  - `title` (`varchar(255)`, not null)
  - `body` (`text`, not null)
  - `slug` (`varchar(255)`, not null)
  - `categoryId` (`uuid`, not null, FK → `categories.id`)
  - `createdAt` (`timestamp`, default now, not null)
  - `updatedAt` (`timestamp`, default now, not null)
  - **Indexes**:
    - `posts_slug_idx` on `slug` (Note: **not unique**)
    - `posts_category_id_idx` on `categoryId`
    - `posts_created_at_idx` on `createdAt`

The main entity for the blog is **`posts`**, each belonging to a **category**.

**Important Rule:** All future schemas defined in `app/db/schema.ts` MUST be accompanied by type exports using Drizzle's `InferSelectModel` and `InferInsertModel` (e.g., `export type Post = InferSelectModel<typeof posts>;`).

---

## Seeding Logic (What Data Exists)

The `scripts/seed.ts` script:

1. Connects to Postgres using `drizzle` + `pg` pool and the shared `schema`.
2. Truncates `posts` and `categories` (with `RESTART IDENTITY CASCADE`).
3. Inserts **root categories**:
   - `Technology`
   - `Lifestyle`
   - `Business`
4. Inserts **nested categories** with `parentId`:
   - Under `Technology`: `Frontend`, `Backend`, `DevOps`
   - Under `Lifestyle`: `Travel`, `Health`
   - Under `Business`: `Startups`
5. Inserts multiple blog posts, e.g.:
   - `Hello Drizzle` (category: `Technology`)
   - `React in 2025`, `Server Components` (category: `Frontend`)
   - `Node.js Best Practices`, `PostgreSQL Tips` (category: `Backend`)
   - `Docker for Devs`, `CI/CD Basics` (category: `DevOps`)
   - `Work & Life`, `Weekend in Lisbon`, `Morning Routine`
   - `Bootstrapping 101`, `Pricing Your Product`

This gives the blog a realistic starting dataset spanning multiple categories.

---

## Server Actions Rule

**CRITICAL:** Every server action MUST perform its entire database operation in a **single query**. The function `getPostByFullPath` (in `app/actions.ts`) serves as the primary example of this approach.

- Whenever possible, use native Drizzle ORM methods.
- However, for complex relationships or traversals (such as recursive CTEs to resolve category paths), you will need to execute raw SQL using `db.execute`.

---

## Current UI State vs. Intended Future

- **Current state**
  - Home page is still the generic Next.js starter (`app/page.tsx`).
  - No pages yet that actually read from the database or show posts.
    \*\*\* End of File
