import { PrismaClient } from "@prisma/client"

let prisma: PrismaClient | undefined

function getPrismaClient(): PrismaClient {
  if (!prisma) {
    prisma = new PrismaClient()
  }

  return prisma
}

export const database = getPrismaClient()
