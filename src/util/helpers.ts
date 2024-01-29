import Filter from "bad-words"
import type { DatabaseQuote, QuoteUnion, QuoteWithCategoriesArray, ValidationError } from "../types/index.js"
import { QUOTE_LIMITS } from "./constants.js"

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
    if (typeof author !== "undefined" && author.length < QUOTE_LIMITS.MinimumAuthorLength) {
      errors.push({
        expected: `string.length <= ${QUOTE_LIMITS.MinimumAuthorLength}`,
        message: `Expected the author to be at least ${QUOTE_LIMITS.MinimumAuthorLength} character`,
        received: `${author.length}`,
      })
    }

    if (typeof author !== "undefined" && author.length > QUOTE_LIMITS.MaximumAuthorLength) {
      errors.push({
        expected: `string.length <= ${QUOTE_LIMITS.MaximumAuthorLength}`,
        message: `Expected the author to be less than ${QUOTE_LIMITS.MaximumAuthorLength} characters`,
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
        if (category.length < QUOTE_LIMITS.MinimumCategoryLength) {
          errors.push({
            expected: `string.length <= ${QUOTE_LIMITS.MinimumCategoryLength}`,
            message: `Expected each category to be at least ${QUOTE_LIMITS.MinimumCategoryLength} character`,
            received: `${category.length}`,
          })
        }

        if (category.length > QUOTE_LIMITS.MaximumCategoryLength) {
          errors.push({
            expected: `string.length <= ${QUOTE_LIMITS.MaximumCategoryLength}`,
            message: `Expected each category to be less than ${QUOTE_LIMITS.MaximumCategoryLength} characters`,
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
    if (submitter.length < QUOTE_LIMITS.MinimumSubmitterLength) {
      errors.push({
        expected: `string.length <= ${QUOTE_LIMITS.MinimumSubmitterLength}`,
        message: `Expected the submitter to be at least ${QUOTE_LIMITS.MinimumSubmitterLength} character`,
        received: `${submitter.length}`,
      })
    }

    if (submitter.length > QUOTE_LIMITS.MaximumSubmitterLength) {
      errors.push({
        expected: `string.length <= ${QUOTE_LIMITS.MaximumSubmitterLength}`,
        message: `Expected the submitter to be less than ${QUOTE_LIMITS.MaximumSubmitterLength} characters`,
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
    if (text.length < QUOTE_LIMITS.MinimumTextLength) {
      errors.push({
        expected: `string.length <= ${QUOTE_LIMITS.MinimumTextLength}`,
        message: `Expected the text to be at least ${QUOTE_LIMITS.MinimumTextLength} character`,
        received: `${text.length}`,
      })
    }

    if (text.length > QUOTE_LIMITS.MaximumTextLength) {
      errors.push({
        expected: `string.length <= ${QUOTE_LIMITS.MaximumTextLength}`,
        message: `Expected the text to be less than ${QUOTE_LIMITS.MaximumTextLength} characters`,
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
