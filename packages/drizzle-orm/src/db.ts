import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: 'postgresql://postgres:password@localhost:6500/acme?schema=public&sslmode=prefer',
})

export const db = drizzle(pool, { logger: true })
