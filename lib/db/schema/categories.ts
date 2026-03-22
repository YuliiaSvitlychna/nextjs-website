import { foreignKey, pgTable, index, uuid, varchar } from "drizzle-orm/pg-core";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const categories = pgTable(
  "categories",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 }).default("hidden").notNull(),
    parentId: uuid("parent_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
      name: "category_parents",
    }),
    index("categories_slug_idx").on(table.slug),
    index("categories_parent_id_idx").on(table.parentId),
  ],
);

export type Category = InferSelectModel<typeof categories>;
export type NewCategory = InferInsertModel<typeof categories>;
