/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      PORT: string
    }
  }
}
