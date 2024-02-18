import type { Quote } from "@prisma/client";
import type { Request, Response } from "express";
import { database } from "../../index.js";
import { convertPropertiesFromDatabase } from "../../util/index.js";

/**
 * Get all the quotes.
 */
export default async function getQuotes(_request: Request, response: Response) {
  try {
    const quotes: Quote[] = await database.quote.findMany({ where: { verified: true } });

    if (!quotes.length) {
      return response.status(404).json({ message: "No quotes found." });
    }

    const convertedQuotes = quotes.map(convertPropertiesFromDatabase);

    return response.status(200).json(convertedQuotes);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "An unknown error occurred, please try again later." });
  }
}
