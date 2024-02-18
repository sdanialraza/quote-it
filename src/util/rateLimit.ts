import rateLimit from "express-rate-limit";

export const postRateLimit = rateLimit({
  limit: 5,
  handler: (_request, response) => {
    response.status(429).json({
      message: "Too many requests. The rate limit is 5 requests per minute on this route.",
    });
  },
});
