import type { Request, Response } from "express"
import { database } from "../../index.js"
import { convertPropertiesForDatabase, convertPropertiesFromDatabase, validateQuote } from "../../util/helpers.js"

/**
 * Create a new quote.
 */
export default async function createQuote(request: Request, response: Response) {
  try {
    const quote = request.body.quote

    const validationErrors = validateQuote(quote)

    if (validationErrors.length > 0) {
      return response.status(400).json({ errors: validationErrors })
    }

    const { author, categories, submitter, text } = convertPropertiesForDatabase(quote)

    const quoteExists = await database.quote.findFirst({ where: { author, text } })

    if (quoteExists) {
      return response.status(409).json({ message: "This quote already exists." })
    }

    const createdQuote = await database.quote.create({ data: { author, categories, submitter, text, verified: false } })

    const convertedQuote = convertPropertiesFromDatabase(createdQuote)

    return response.status(200).json({ quote: convertedQuote })
  } catch (error) {
    console.error(error)
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}
