import { Router } from "express"
import getInfo from "./info/getInfo.js"
import getQuoteById from "./quotes/getQuoteById.js"
import getQuotes from "./quotes/getQuotes.js"
import getQuotesByAuthor from "./quotes/getQuotesByAuthor.js"
import getQuotesByCategory from "./quotes/getQuotesByCategory.js"
import getRandomQuote from "./quotes/getRandomQuote.js"

const router = Router()

router.get("/info", getInfo)

router.get("/quotes", getQuotes)
router.get("/quotes/:id", getQuoteById)
router.get("/quotes/author/:author", getQuotesByAuthor)
router.get("/quotes/category/:category", getQuotesByCategory)
router.get("/quotes/random", getRandomQuote)

export default router
