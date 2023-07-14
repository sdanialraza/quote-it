import type { Request, Response } from "express"

import { db } from "../utils/db.server"

/**
 * Get all the quotes from the database
 */
export default async function getQuotes(_request: Request, response: Response) {
  try {
    const quotes = await db.quote.findMany()
    return response.status(200).json(quotes)
  } catch (error) {
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}
