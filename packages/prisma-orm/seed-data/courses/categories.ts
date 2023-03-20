import type { Prisma } from '../../dist'
import { slugify } from '../../utils'

const param1 = 'Puppy Obedience & Socialisation'
const paramSlug1 = slugify(`${param1}`)

const param2 = 'Dog Sports'
const paramSlug2 = slugify(`${param2}`)

const param3 = 'Adult Dog Basic Obedience'
const paramSlug3 = slugify(`${param3}`)

const param4 = 'Agility Training'
const paramSlug4 = slugify(`${param4}`)

const param5 = 'Intermediate Training'
const paramSlug5 = slugify(`${param5}`)

const param6 = 'Specialised Training'
const paramSlug6 = slugify(`${param6}`)

export const categories: Prisma.CourseCategoryCreateManyArgs = {
  data: [
    {
      name: `${param1}`,
      eyebrow: null,
      badge: null,
      excerpt: 'We teach you how to communicate with your dog, important tools and exercises.',
      description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis',
      link: { href: `/course/category/${paramSlug1}`, icon: 'chart-pie' },
      slug: `${paramSlug1}`,
    },
    {
      name: `${param2}`,
      eyebrow: null,
      badge: 'New',
      excerpt: 'Connect with third-party tools and find out expectations.',
      description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis',
      link: { href: `/course/category/${paramSlug2}`, icon: 'squares-plus' },
      slug: `${paramSlug2}`,
    },
    {
      name: `${param3}`,
      eyebrow: null,
      badge: null,
      excerpt: 'Speak directly to your customers with our engagement tool',
      description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis',
      link: { href: `/course/category/${paramSlug3}`, icon: 'cursor-arrow-rays' },
      slug: `${paramSlug3}`,
    },
    {
      name: `${param4}`,
      eyebrow: null,
      badge: null,
      excerpt: 'Build strategic funnels that will convert',
      description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis',
      link: { href: `/course/category/${paramSlug4}`, icon: 'arrow-path' },
      slug: `${paramSlug4}`,
    },
    {
      name: `${param5}`,
      eyebrow: null,
      badge: null,
      excerpt: 'Once you have graduated Basic Home Obedience Three.',
      description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis',
      link: { href: `/course/category/${paramSlug5}`, icon: 'finger-print' },
      slug: `${paramSlug5}`,
    },
    {
      name: `${param6}`,
      eyebrow: null,
      badge: null,
      excerpt: 'Edit, manage and create newly informed decisions',
      description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis',
      link: { href: `/course/category/${paramSlug6}`, icon: 'briefcase' },
      slug: `${paramSlug6}`,
    },
  ],
  skipDuplicates: true,
}
