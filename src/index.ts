import { config } from "dotenv"
import cors from "cors"
import express from "express"

config()

if (!process.env.PORT) process.exit(1)

const PORT = parseInt(process.env.PORT, 10)

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
