import { PrismaClient } from "@prisma/client"

let db: PrismaClient

/* eslint-disable no-var */
declare global {
  var __db: PrismaClient | undefined
}

if (!global.__db) global.__db = new PrismaClient()

/* eslint-disable prefer-const */
db = global.__db

export { db }
