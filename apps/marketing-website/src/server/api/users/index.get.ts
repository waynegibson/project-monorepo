import { prisma } from '@project/prisma-orm'

export default defineEventHandler(
  async (): Promise<any> => {
    const users = await prisma.user.findMany()

    return {
      ...users,
    }
  },
)
