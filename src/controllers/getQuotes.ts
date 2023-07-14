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
    if (error instanceof Error) return response.status(500).json(error.message)
    else return response.status(500).json(error)
  }
}
