import User from "~/server/models/user.model"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const user = await User.create(body)
    return { user }
  } catch(error) {
    throw createError({
      statusCode: 500,
      statusMessage: (error as Error).message || (error as Error).toString()
    })
  }
})