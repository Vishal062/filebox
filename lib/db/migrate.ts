/*
*info - migrate and drizzle comes from same place either http or serverless
*/
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';


import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

if (!process.env.NEON_DATABASE_URL) {
  throw new Error('NEON_DATABASE_URL is not defined in .env file');
}

async function runMigration() {
  try {
    const sql = neon(process.env.NEON_DATABASE_URL!);
    const db = drizzle(sql, { logger: true });

    await migrate(db, { migrationsFolder: './drizzle' });
    console.info('Migrations completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1);
  }
};

