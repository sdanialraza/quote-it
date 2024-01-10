import type { Quote } from "@prisma/client"
import type { Request, Response } from "express"
import { database, convertPropertiesFromDatabase } from "../../util/index.js"

/**
 * Get a quote by its id.
 */
export default async function getQuoteById(request: Request, response: Response) {
  try {
    const id = Number.parseInt(request.params.id, 10)

    if (Number.isNaN(id)) {
      return response.status(400).json({ message: "The provided id is invalid." })
    }

    const quote: Quote = await database.quote.findUniqueOrThrow({ where: { id, verified: true } })

    return response.status(200).json(convertPropertiesFromDatabase(quote))
  } catch (error) {
    console.error(error)
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}