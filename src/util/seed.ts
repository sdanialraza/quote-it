import process from "node:process"
import { PrismaClient } from "@prisma/client"
import { quotes } from "../data/quotes.js"
import { convertPropertiesForDatabase } from "./index.js"

const database = new PrismaClient()

async function seed() {
  console.info("Started seeding the database with quotes...")

  let [added, skipped] = [0, 0]

  const existingQuotes = await database.quote.findMany()

  const convertedQuotes = quotes.map(convertPropertiesForDatabase)

  for (const quote of convertedQuotes) {
    if (existingQuotes.some(existingQuote => existingQuote.text === quote.text)) {
      skipped++
      continue
    }

    await database.quote.create({ data: quote })
    added++
  }

  console.info("Finished seeding the database with quotes:")
  console.info(`Added ${added} quotes and skipped ${skipped} quotes.`)
}

await seed()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await database.$disconnect()
    process.exit(0)
  })
