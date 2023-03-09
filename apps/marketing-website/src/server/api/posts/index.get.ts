import { prisma } from '@project/prisma-orm'

export default defineEventHandler(
  async (): Promise<any> => {
    const posts = await prisma.post.findMany()

    return {
      ...posts,
    }
  },
)
