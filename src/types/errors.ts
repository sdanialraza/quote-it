/**
 * Defines the structure of a validation error
 *
 * @typeParam Expected - The expected value type
 * @typeParam Received - The received value type
 */
export type ValidationError<Expected = string, Received = unknown> = {
  /**
   * The expected type
   */
  expected: Expected
  /**
   * The error message
   */
  message: string
  /**
   * The received value
   */
  received: Received
}
