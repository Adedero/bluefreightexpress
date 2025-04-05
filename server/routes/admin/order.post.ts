import Order from "~/server/models/order.model"
import { randomString } from '~/server/utils'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const order = new Order({ ...body })
    await order.save()
    return { order }
  } catch(error) {
    throw createError({
      statusCode: 500,
      statusMessage: (error as Error).message || (error as Error).toString()
    })
  }
})
