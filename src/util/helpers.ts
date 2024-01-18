import Filter from "bad-words"
import type { DatabaseQuote, QuoteUnion, QuoteWithCategoriesArray, ValidationError } from "../types/index.js"

/**
 * Converts the properties of a quote for the database
 *
 * @param quote - The quote to convert the properties of
 */
export function convertPropertiesForDatabase(quote: QuoteUnion) {
  return {
    ...quote,
    author: quote.author ?? "Unknown",
    categories: Array.isArray(quote.categories) ? quote.categories.join(", ") : quote.categories,
  }
}

/**
 * Converts the properties of a quote from the database
 *
 * @param quote - The quote to convert the properties of
 */
export function convertPropertiesFromDatabase(quote: DatabaseQuote): QuoteWithCategoriesArray {
  return {
    ...quote,
    categories: typeof quote.categories === "string" ? quote.categories.split(", ") : quote.categories,
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

  const { author, categories, submitter, text } = quote as Record<string, unknown>

  if (typeof author === "string" || typeof author === "undefined") {
    if (typeof author !== "undefined" && author.length < 1) {
      errors.push({
        expected: "string.length <= 1",
        message: "Expected the author to be at least 1 character",
        received: `${author.length}`,
      })
    }

    if (typeof author !== "undefined" && author.length > 30) {
      errors.push({
        expected: "string.length <= 30",
        message: "Expected the author to be less than 30 characters",
        received: `${author.length}`,
      })
    }
  } else {
    errors.push({
      expected: "string | undefined",
      message: `Expected the author to be a string or undefined, but received ${typeof author}`,
      received: `${author}`,
    })
  }

  if (Array.isArray(categories)) {
    for (const category of categories) {
      if (typeof category === "string") {
        if (category.length < 1) {
          errors.push({
            expected: "string.length <= 1",
            message: "Expected each category to be at least 1 character",
            received: `${category.length}`,
          })
        }

        if (category.length > 20) {
          errors.push({
            expected: "string.length <= 20",
            message: "Expected each category to be less than 20 characters",
            received: `${category.length}`,
          })
        }
      } else {
        errors.push({
          expected: "string",
          message: `Expected each category to be a string, but received ${typeof category}`,
          received: `${category}`,
        })
        break
      }
    }
  } else {
    errors.push({
      expected: "string[]",
      message: `Expected the categories to be an array of string, but received ${typeof categories}`,
      received: `${categories}`,
    })
  }

  if (typeof submitter === "string") {
    if (submitter.length < 1) {
      errors.push({
        expected: "string.length <= 1",
        message: "Expected the submitter to be at least 1 character",
        received: `${submitter.length}`,
      })
    }

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
    if (text.length < 1) {
      errors.push({
        expected: "string.length <= 1",
        message: "Expected the text to be at least 1 character",
        received: `${text.length}`,
      })
    }

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
