import { Router } from "express";
import { postRateLimit } from "../util/index.js";
import getInfo from "./info/getInfo.js";
import createQuote from "./quotes/createQuote.js";
import getQuoteById from "./quotes/getQuoteById.js";
import getQuotes from "./quotes/getQuotes.js";
import getQuotesByAuthor from "./quotes/getQuotesByAuthor.js";
import getQuotesInCategory from "./quotes/getQuotesInCategory.js";
import getRandomQuote from "./quotes/getRandomQuote.js";

const router = Router();

router.get("/info", getInfo);

router.get("/quotes", getQuotes);
router.get("/quotes/random", getRandomQuote);
router.get("/quotes/:id", getQuoteById);
router.get("/quotes/author/:author", getQuotesByAuthor);
router.get("/quotes/category/:category", getQuotesInCategory);

router.post("/quotes", postRateLimit, createQuote);

export default router;
