import type { Quote } from "@prisma/client";
import type { Request, Response } from "express";
import { database } from "../../index.js";
import { convertPropertiesFromDatabase } from "../../util/index.js";

/**
 * Get a quote by its id.
 */
export default async function getQuoteById(request: Request, response: Response) {
  try {
    const id = Number.parseInt(request.params.id, 10);

    if (Number.isNaN(id) || id < 1) {
      return response.status(400).json({ message: "The provided id is invalid." });
    }

    const quote: Quote | null = await database.quote.findUnique({ where: { id, verified: true } });

    if (!quote) {
      return response.status(404).json({ message: "The quote with the provided id does not exist." });
    }

    return response.status(200).json(convertPropertiesFromDatabase(quote));
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "An unknown error occurred, please try again later." });
  }
}
