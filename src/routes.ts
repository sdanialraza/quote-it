import { Router } from "express"

import getQuotes from "./controllers/getQuotes"
import getRandomQuote from "./controllers/getRandomQuote"
import getQuoteById from "./controllers/getQuoteById"

const router = Router()

router.get("/quotes", getQuotes)
router.get("/quotes/random", getRandomQuote)
router.get("/quotes/:id", getQuoteById)

export default router
