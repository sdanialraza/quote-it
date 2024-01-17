import type { Quote } from "@prisma/client"
import type { Request, Response } from "express"
import { database } from "../../index.js"
import { convertPropertiesFromDatabase } from "../../util/index.js"

/**
 * Get all the quotes in a specific category.
 */
export default async function getQuotesInCategory(request: Request, response: Response) {
  try {
    const category = request.params.category.toLowerCase()

    if (!category) {
      return response.status(400).json({ message: "The provided category is invalid." })
    }

    const quotes: Quote[] = await database.quote.findMany({
      where: { categories: { contains: category }, verified: true },
    })

    if (!quotes.length) {
      return response.status(404).json({ message: `No quotes in the ${category} category found.` })
    }

    const convertedProperties = quotes.map(convertPropertiesFromDatabase)

    return response.status(200).json(convertedProperties)
  } catch (error) {
    console.error(error)
    return response.status(500).json({ message: "An unknown error occurred, please try again later." })
  }
}
