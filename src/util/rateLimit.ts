import rateLimit from "express-rate-limit"

export const defaultRateLimit = rateLimit({
  limit: 10,
  handler: (_request, response) => {
    response.status(429).json({
      message: "Too many requests. The rate limit is 10 requests per minute on this route.",
    })
  },
})
