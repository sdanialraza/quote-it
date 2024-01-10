import type { Quote } from "@prisma/client"
import type { Request, Response } from "express"
import { database } from "../../index.js"
import { convertPropertiesFromDatabase } from "../../util/index.js"

/**
 * Get all the quotes by their category.
 */
export default async function getQuotesByCategory(request: Request, response: Response) {
  try {
    const category = request.params.category.toLowerCase()

    const quotes: Quote[] = await database.quote.findMany({
      where: { category: { contains: category }, verified: true },
    })

    const convertedProperties = quotes.map(convertPropertiesFromDatabase)

    return response.status(200).json(convertedProperties)
  } catch (error) {
    console.error(error)
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}
