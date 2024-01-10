import type { Request, Response } from "express"
import { database } from "../../index.js"
import { DESCRIPTION, NAME, VERSION } from "../../util/index.js"

/**
 * Get information about the API.
 */
export default async function getInfo(_request: Request, response: Response) {
  try {
    const totalQuotes = await database.quote.count({ where: { verified: true } })

    return response.status(200).json({
      name: NAME,
      description: DESCRIPTION,
      version: VERSION,
      counts: {
        quotes: totalQuotes,
      },
    })
  } catch (error) {
    console.error(error)
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}
