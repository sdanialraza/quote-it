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
  category: Category[]
  submitter: string
  text: string
  verified: boolean
}
