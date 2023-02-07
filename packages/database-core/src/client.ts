/**
 * PrismaClient is attached to the `global` object in development to prevent
 * exhausting your database connection limit.
 * this is needed because in development we don't want to restart
 * the server with every change, but we want to make sure we don't
 * create a new connection to the DB with every change either.
 * in production we'll have a single connection to the DB.
 */
import { PrismaClient } from '@prisma/client'

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
}
else {
  if (!global.prisma)
    global.prisma = new PrismaClient()

  prisma = global.prisma
  prisma.$connect()
}

export { prisma }
