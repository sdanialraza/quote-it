import type { Quote as DatabaseQuote } from "@prisma/client"
import type { Category, QuoteUnion } from "../types/index.js"

/**
 * Converts the properties of a quote for the database
 *
 * @param quote - The quote to convert the properties of
 */
export function convertPropertiesForDatabase(quote: QuoteUnion) {
  return {
    ...quote,
    author: quote.author ?? "Unknown",
    category: Array.isArray(quote.category) ? quote.category.join(", ") : quote.category,
  }
}

/**
 * Converts the properties of a quote from the database
 *
 * @param quote - The quote to convert the properties of
 */
export function convertPropertiesFromDatabase(quote: DatabaseQuote) {
  return {
    ...quote,
    category: typeof quote.category === "string" ? (quote.category.split(", ") as Category[]) : quote.category,
  }
}
