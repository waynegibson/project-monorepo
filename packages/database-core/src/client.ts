import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const dbClient = globalForPrisma.prisma || new PrismaClient({ log: ['query'] })

if (process.env.NODE_ENV !== 'production')
  globalForPrisma.prisma = dbClient

export * from '@prisma/client'
