import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "./schema/index";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL must be configured before using the database.");
}

const client = postgres(databaseUrl);

export const db = drizzle(client, { schema });
export { schema };
