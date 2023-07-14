import { Router } from "express"

import getQuotes from "./controllers/getQuotes"

const router = Router()

router.get("/quotes", getQuotes)

export default router
