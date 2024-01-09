import process from "node:process"
import cors from "cors"
import express from "express"
import router from "./routes/index.js"

const PORT = Number.parseInt(process.env.PORT, 10)

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
