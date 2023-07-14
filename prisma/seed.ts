import { db } from "../src/utils/db.server"

async function seed() {
  /* Seeding logic goes here */
}

seed().catch(console.error).finally(db.$disconnect)
