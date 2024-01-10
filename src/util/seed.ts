import { quotes } from "../data/quotes.js"
import { database } from "../index.js"
import { convertPropertiesForDatabase } from "./index.js"

const existingQuotes = await database.quote.findMany()

const convertedQuotes = quotes.map(convertPropertiesForDatabase)

for (const quote of convertedQuotes) {
  if (existingQuotes.some(existingQuote => existingQuote.text === quote.text)) {
    continue
  }

  await database.quote.create({ data: quote })
}

console.info("Seeded the database with quotes")
