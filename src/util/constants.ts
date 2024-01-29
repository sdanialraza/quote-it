/**
 * The name of the API
 */
export const NAME = "Quote-It" as const

/**
 * The description of the API
 */
export const DESCRIPTION = "Your go-to API for inspiring, and thought-provoking quotes." as const

/**
 * The version of the API
 */
export const VERSION = "1.0.0" as const

/**
 * The limits of the quote
 */
export const QUOTE_LIMITS = {
  /**
   * The minimum length of the author
   */
  MinimumAuthorLength: 1,
  /**
   * The maximum length of the author
   */
  MaximumAuthorLength: 30,

  /**
   * The minimum length of the category
   */
  MinimumCategoryLength: 1,
  /**
   * The maximum length of the category
   */
  MaximumCategoryLength: 20,

  /**
   * The minimum length of the submitter
   */
  MinimumSubmitterLength: 1,
  /**
   * The maximum length of the submitter
   */
  MaximumSubmitterLength: 30,

  /**
   * The minimum length of the text
   */
  MinimumTextLength: 1,
  /**
   * The maximum length of the text
   */
  MaximumTextLength: 200,
} as const
