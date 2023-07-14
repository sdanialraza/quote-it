import { Router } from "express"

import getQuotes from "./controllers/getQuotes"
import getRandomQuote from "./controllers/getRandomQuote"

const router = Router()

router.get("/quotes", getQuotes)
router.get("/quotes/random", getRandomQuote)

export default router
