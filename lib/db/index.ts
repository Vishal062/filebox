import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';


import * as schema from './schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const sql = neon(process.env.NEON_DATABASE_URL as string);

export const db = drizzle(sql, { schema });

export {sql};