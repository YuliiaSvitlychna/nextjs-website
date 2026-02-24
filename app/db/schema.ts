import {
  foreignKey,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const categories = pgTable(
  "categories",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    parentId: uuid("parent_id"),
  },
  (table) => ({
    parentRef: foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
      name: "category_parents",
    }),
  }),
);

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  body: text("body").notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => categories.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
