export type ValidationError<Expected = string, Received = unknown> = {
  expected: Expected
  message: string
  received: Received
}
