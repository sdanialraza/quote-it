import type { Quote as PrismaQuote } from "@prisma/client"

/**
 * Defines the structure of a quote before it is added to the database
 */
export type QuoteCreation = {
  /**
   * The author of the quote
   */
  author?: string
  /**
   * The categories the quote belongs in
   */
  categories: string[]
  /**
   * The submitter of the quote
   */
  submitter: string
  /**
   * The text of the quote
   */
  text: string
  /**
   * Whether the quote is verified or not
   */
  verified: boolean
}

/**
 * Defines the structure of a quote after it is added to the database
 */
export type DatabaseQuote = Omit<QuoteCreation, "categories"> & {
  /**
   * The categories the quote belongs in
   */
  categories: PrismaQuote["categories"]
  /**
   * The date the quote was submitted
   */
  createdAt: PrismaQuote["createdAt"]
  /**
   * The Id of the quote
   */
  id: PrismaQuote["id"]
  /**
   * The date the quote was last updated
   */
  updatedAt: PrismaQuote["updatedAt"]
}

/**
 * Defines the structure of a quote with categories as an array
 */
export type QuoteWithCategoriesArray = Omit<DatabaseQuote, "categories"> & Pick<QuoteCreation, "categories">

/**
 * Defined a union of a quote before and after it is added to the database
 */
export type QuoteUnion = DatabaseQuote | QuoteCreation
