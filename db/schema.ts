import {
  pgTable,
  text,
  timestamp,
  integer,
  primaryKey,
} from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { AdapterAccountType } from '@auth/core/adapters'

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  password: text('password'),
})

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
)
