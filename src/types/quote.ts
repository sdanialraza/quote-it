export type Category =
  | "Art"
  | "Fashion"
  | "Funny"
  | "Inspirational"
  | "Leadership"
  | "Life"
  | "Love"
  | "Motivational"
  | "Music"
  | "People"
  | "Sports"
  | "Success"
  | "Wisdom"
  | "Work"

export type Quote = {
  author?: string
  categories: Category[]
  submitter: string
  text: string
  verified: boolean
}

export type QuoteWithStringCategories = Omit<Quote, "categories"> & { categories: string }

export type QuoteUnion = Quote | QuoteWithStringCategories
