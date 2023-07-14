import type { Request, Response } from "express"

import { db } from "../utils/db.server"

/**
 * Get a random quote from the database.
 */
export default async function getRandomQuote(_request: Request, response: Response) {
  try {
    const totalItems = await db.quote.count()
    const randomId = Math.floor(Math.random() * totalItems)

    const randomQuote = await db.quote.findUnique({
      where: {
        id: randomId,
      },
    })

    return response.status(200).json(randomQuote)
  } catch (error) {
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}
