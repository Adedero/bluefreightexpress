import User from "~/server/models/user.model"
import { LogInSchema } from "~/schema"
import { verify } from 'argon2'


export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) => LogInSchema.safeParse(body))
  if (!result.success) {
    const firstError = result.error.errors[0]
    throw createError({
      statusCode: 400,
      statusMessage: firstError.message,
      data: {
        statusMessage: firstError.message
      }
    })
  }

  const { email, password } = result.data

  const user = await User.findOne({ email, role: 'ADMIN' }).select("+password")
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid email or password",
      data: {
        statusMessage: "Invalid email or password"
      }
    })
  }

  if (!(await verify(user.password as string, password))) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid email or password",
      data: {
        statusMessage: "Invalid email or password"
      }
    })
  }
  await setUserSession(event, {
    user: {
      name: user.name,
      email: user.email
    }
  }, {
    maxAge: 60 * 60 * 4 //4 hours
  })
  return {}
})