# nextjs-our-site – local setup from scratch

This project currently contains a **PostgreSQL + Drizzle ORM** schema and migrations. The steps below describe how to spin up the database and work with it locally.

## 1. Prerequisites

- **Docker** and **Docker Compose**
- **Node.js** (LTS recommended)
- **pnpm** (as specified in `packageManager` in `package.json`)

Verify:

```bash
node -v
pnpm -v
docker -v
docker compose version
```

## 2. Install dependencies

In the project root:

```bash
pnpm install
```

## 3. Run PostgreSQL via Docker Compose

The `docker-compose.yml` file already contains a Postgres service definition.

Start the database:

```bash
docker compose up -d
```

Check that the container is running:

```bash
docker compose ps
```

By default, the database is available on `localhost:5432` with credentials from `docker-compose.yml`.

## 4. Environment variables

Create `.env` from the example file `.env.example`:

```bash
cp .env.example .env
```

By default, the file contains at least:

```env
DATABASE_URL="postgresql://admin:admin@localhost:5432/db"
```

This value is used in `drizzle.config.ts`.

## 5. Migrations and schema (Drizzle)

### Apply migrations to the database

```bash
pnpm run db:push
```

### Open Drizzle Studio

```bash
pnpm run db:studio
```

After Studio starts, you’ll get a UI to view and edit data in the database.

## 6. Code formatting

Code formatting is handled by **Prettier**:

```bash
pnpm run format
```

## 7. Build

```bash
pnpm build
```

## 8. Dev server

```bash
pnpm dev
```

## 9. Typical setup flow from scratch

1. Clone the repository (or copy the project files).
2. Install dependencies: `pnpm install`.
3. Start Postgres: `docker compose up -d`.
4. Create `.env` from `.env.example`: `cp .env.example .env` and adjust `DATABASE_URL` if needed.
5. Generate migrations: `pnpm run db:gen` (if the schema was changed).
6. Apply migrations: `pnpm run db:push`.
7. (Optional) Open `db:studio` to inspect and edit data.
8. Build the app: `pnpm build`.
9. Run the dev server: `pnpm dev`.

The app will be available at [http://localhost:3000](http://localhost:3000).
