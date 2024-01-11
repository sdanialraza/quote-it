import type { Quote as DatabaseQuote } from "@prisma/client"
import Filter from "bad-words"
import type { Category, QuoteUnion, ValidationError } from "../types/index.js"

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

/**
 * Validates a quote
 *
 * @param quote - The quote to validate
 */
export function validateQuote(quote: unknown) {
  const errors: ValidationError[] = []

  if (typeof quote !== "object") {
    errors.push({
      expected: "object",
      message: `Expected the quote to be an object, but received ${typeof quote}`,
      received: `${quote}`,
    })
  }

  const { author, category, submitter, text } = quote as Record<string, unknown>

  if (typeof author === "string") {
    if (author.length > 30) {
      errors.push({
        expected: "string.length <= 30",
        message: "Expected the author to be less than 30 characters",
        received: `${author.length}`,
      })
    }
  } else {
    errors.push({
      expected: "string",
      message: `Expected the author to be a string, but received ${typeof author}`,
      received: `${author}`,
    })
  }

  if (Array.isArray(category)) {
    for (const categoryItem of category) {
      if (typeof categoryItem === "string") {
        if (categoryItem.length > 20) {
          errors.push({
            expected: "string.length <= 20",
            message: "Expected each category to be less than 20 characters",
            received: `${categoryItem.length}`,
          })
        }
      } else {
        errors.push({
          expected: "string",
          message: `Expected each category to be a string, but received ${typeof categoryItem}`,
          received: `${categoryItem}`,
        })
        break
      }
    }
  } else {
    errors.push({
      expected: "string[]",
      message: `Expected the category to be an array of string, but received ${typeof category}`,
      received: `${category}`,
    })
  }

  if (typeof submitter === "string") {
    if (submitter.length > 20) {
      errors.push({
        expected: "string.length <= 20",
        message: "Expected the submitter to be less than 20 characters",
        received: `${submitter.length}`,
      })
    }
  } else {
    errors.push({
      expected: "string",
      message: `Expected the submitter to be a string, but received ${typeof submitter}`,
      received: `${submitter}`,
    })
  }

  if (typeof text === "string") {
    if (text.length > 200) {
      errors.push({
        expected: "string.length <= 200",
        message: "Expected the text to be less than 200 characters",
        received: `${text.length}`,
      })
    }

    const filter = new Filter()

    if (filter.isProfane(text)) {
      errors.push({
        expected: "string not containing profanity",
        message: "Expected the text to not contain profanity",
        received: `${text}`,
      })
    }
  } else {
    errors.push({
      expected: "string",
      message: `Expected the text to be a string, but received ${typeof text}`,
      received: `${text}`,
    })
  }

  return errors
}
