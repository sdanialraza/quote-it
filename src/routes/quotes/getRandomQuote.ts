import type { Quote } from "@prisma/client"
import type { Request, Response } from "express"
import { database } from "../../index.js"
import { convertPropertiesFromDatabase } from "../../util/index.js"

/**
 * Get a random quote.
 */
export default async function getRandomQuote(_request: Request, response: Response) {
  try {
    const totalQuotes = await database.quote.count({ where: { verified: true } })
    const randomId = Math.ceil(Math.random() * totalQuotes)

    const randomQuote: Quote = await database.quote.findUniqueOrThrow({
      where: { id: randomId, verified: true },
    })

    return response.status(200).json(convertPropertiesFromDatabase(randomQuote))
  } catch (error) {
    console.error(error)
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}
