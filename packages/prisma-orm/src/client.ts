/**
 * PrismaClient is attached to the `global` object in development to prevent
 * exhausting your database connection limit.
 *
 * This is needed because in development we don't want to restart
 * the server with every change, but we want to make sure we don't
 * create a new connection to the DB with every change either.
 *
 * In production we'll have a single connection to the DB.
 */
import { PrismaClient } from '@prisma/client'

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient | undefined
}

// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
}
else {
  if (!global.prisma)
    global.prisma = new PrismaClient()

  prisma = global.prisma
  prisma.$connect()
}

// required for the custom connection client
export { prisma }
// required for the schema type definations
export * from '@prisma/client'
