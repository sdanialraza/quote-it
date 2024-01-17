import type { Quote } from "@prisma/client"
import type { Request, Response } from "express"
import { database } from "../../index.js"
import { convertPropertiesFromDatabase } from "../../util/index.js"

/**
 * Get all the quotes by a specific author.
 */
export default async function getQuotesByAuthor(request: Request, response: Response) {
  try {
    const author = request.params.author

    if (!author) {
      return response.status(400).json({ message: "The provided author is invalid." })
    }

    const quotes: Quote[] = await database.quote.findMany({ where: { author: { contains: author }, verified: true } })

    if (!quotes.length) {
      return response.status(404).json({ message: `No quotes by ${author} found.` })
    }

    const convertedQuotes = quotes.map(convertPropertiesFromDatabase)

    return response.status(200).json(convertedQuotes)
  } catch (error) {
    console.error(error)
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}
