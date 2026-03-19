import {
    foreignKey,
    pgTable,
    text,
    timestamp,
    index,
    uuid,
    varchar,
  } from 'drizzle-orm/pg-core';
  import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';
  
  export const categories = pgTable(
    'categories',
    {
      id: uuid('id').primaryKey().defaultRandom(),
      title: varchar('title', { length: 255 }).notNull(),
      slug: varchar('slug', { length: 255 }).notNull(),
      parentId: uuid('parent_id'),
    },
    (table) => [
      foreignKey({
        columns: [table.parentId],
        foreignColumns: [table.id],
        name: 'category_parents',
      }),
      index('categories_slug_idx').on(table.slug),
      index('categories_parent_id_idx').on(table.parentId),
    ]
  );
  
  export const posts = pgTable(
    'posts',
    {
      id: uuid('id').primaryKey().defaultRandom(),
      title: varchar('title', { length: 255 }).notNull(),
      body: text('body').notNull(),
      slug: varchar('slug', { length: 255 }).notNull(),
      categoryId: uuid('category_id')
        .notNull()
        .references(() => categories.id),
      createdAt: timestamp('created_at').defaultNow().notNull(),
      updatedAt: timestamp('updated_at').defaultNow().notNull(),
    },
    (table) => [
      index('posts_slug_idx').on(table.slug),
      index('posts_category_id_idx').on(table.categoryId),
      index('posts_created_at_idx').on(table.createdAt),
    ]
  );
  
  export type Category = InferSelectModel<typeof categories>;
  export type NewCategory = InferInsertModel<typeof categories>;
  export type Post = InferSelectModel<typeof posts>;
  export type NewPost = InferInsertModel<typeof posts>;