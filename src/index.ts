import process from "node:process"
import { PrismaClient } from "@prisma/client"
import cors from "cors"
import express from "express"
import router from "./routes/index.js"
import { defaultRateLimit } from "./util/index.js"

const PORT = Number.parseInt(process.env.PORT, 10)

const app = express()
export const database = new PrismaClient()

app.use(cors())
app.use(defaultRateLimit)
app.use(express.json())

app.use(router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
