import Order from "~/server/models/order.model"

export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const id = getRouterParam(event, 'id')

  const order = await Order.findById(id)

  if (!order) {
    throw createError({
      statusCode: 404,
      data: {
        statusMessage: 'Order not found'
      }
    })
  }

  await order.deleteOne()

  return {}
})