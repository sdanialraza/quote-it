import type { Request, Response } from "express"

import { db } from "../utils/db.server"

/**
 * Get a quote by its ID
 */
export default async function getQuoteById(request: Request, response: Response) {
  try {
    const id = parseInt(request.params.id, 10)

    const quote = await db.quote.findUnique({
      where: {
        id,
      },
    })

    if (quote) return response.status(200).json(quote)
    else return response.status(404).json({ message: "Unable to find any quote with that ID" })
  } catch (error: unknown) {
    if (error instanceof Error) return response.status(500).json(error.message)
    else return response.status(500).json(error)
  }
}
