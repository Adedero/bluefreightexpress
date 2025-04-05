import { createConnection } from "~/server/lib/db"

export default defineNuxtPlugin(async (nuxtApp) => {
  await createConnection()
})