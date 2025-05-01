import {pgTable, text, uuid, integer, boolean, timestamp} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';


export const files = pgTable('files', {
  id: uuid('id').defaultRandom().primaryKey(),
  /*
  * The basic file folder information"
  */
  name: text('name').notNull(),
  path: text('path').notNull(),
  size: integer('size').notNull(),
  type: text('type').notNull(), //folder
  /*
  * Storage information"
  */
  fileUrl: text('file_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  /*
  * Ownership information"
  */
  userId: uuid('user_id').notNull(),
  parentId: uuid('parent_id').notNull(),

  isFolder: boolean('is_folder').notNull().default(false),
  isStarred: boolean('is_starred').notNull().default(false),
  isTrash: boolean('is_trash').notNull().default(false),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/*
* Relations:
* Parent: Each file can have a parent folder (or be a root folder).
* children: Each folder can have multiple files and subfolders.
*/
export const filesRelations = relations(files, ({ one, many }) => ({
  parent: one(files, { 
    fields: [files.parentId], 
    references: [files.id] 
  }),
  children: many(files),
}));

/*
* Type Definitions:
*/

export const File = typeof files.$inferSelect;
export const newFile = typeof files.$inferInsert;