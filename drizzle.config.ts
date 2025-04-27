import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({path: ".env"});

if(!process.env.NEON_DATABASE_URL) {
  throw new Error("NEON_DATABASE_URL is not defined in .env file");
}
export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL!,
  },
  breakpoints: true,
  migrations: {
    table: '_drizzle_migrations',
    schema: 'public',

  },
  verbose: true,
  strict: true,
});