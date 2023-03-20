interface BaseLink {
  name?: string
  href: string
}

interface BaseIcon {
  icon: string | null
}

interface BasePrice {
  amount: string
}

interface BaseCurrency {
  symbol: string
}

interface BasePeriod {
  period: string
}

/**
 * A generator that changes the Prisma Client output to strongly type Json fields.
 *
 * By using the Typescript Compiler API, this generator parses the generated client's types AST and
 * looks for Prisma.JsonValue types (or related) and replaces them with their corresponding type.
 *
 * https://github.com/arthurfiorette/prisma-json-types-generator
 *
 * This project should be a temporary workaround (and possible solution) to prisma/prisma#3219.
 */
declare global {
  namespace PrismaJson {
    // You can use classes, interfaces, types, etc.
    type LinkType = BaseLink & BaseIcon
    type PriceType = BasePrice & BaseCurrency & BasePeriod
  }
}

export * from './client'
