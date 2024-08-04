import 'dotenv/config'
import { migrate } from 'drizzle-orm/node-postgres/migrator'

import { db } from '@/db/db'

const program = async () => {
  try {
    await migrate(db, { migrationsFolder: 'drizzle' })
    console.log('Migration completed')
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}

void program()
