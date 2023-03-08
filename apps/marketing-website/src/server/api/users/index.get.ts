import { prisma } from '@project/prisma-orm'

export default defineEventHandler(
  async (event): Promise<any> => {
    const users = await prisma.user.findMany()

    return {
      ...users,
    }
  },
)
