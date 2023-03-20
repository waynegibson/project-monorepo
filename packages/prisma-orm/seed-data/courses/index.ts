import { prisma } from '../../dist'
import { categories } from './categories'
import { puppyClasses } from './puppy-classes'
import { basicHomeObedience } from './basic-home-obedience'
import { intermediate } from './intermediate-training'
import { privateLessons } from './private-lessons'
import { scentDiscrimination } from './scent-discrimination'
import { protectionWork } from './protection-bite-work'
import { mantrailing } from './mantrailing-training'
import { tracking } from './tracking-training'
import { agility } from './agility-training'

export const createCourses = async (): Promise<void> => {
  await prisma.$transaction([
    prisma.courseCategory.createMany(categories),
    prisma.course.create({ data: puppyClasses }),
    prisma.course.create({ data: basicHomeObedience }),
    prisma.course.create({ data: intermediate }),
    prisma.course.create({ data: privateLessons }),
    prisma.course.create({ data: scentDiscrimination }),
    prisma.course.create({ data: protectionWork }),
    prisma.course.create({ data: mantrailing }),
    prisma.course.create({ data: tracking }),
    prisma.course.create({ data: agility }),
  ])
}
