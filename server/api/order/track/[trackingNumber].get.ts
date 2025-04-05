import Order from "~/server/models/order.model"

export default defineEventHandler(async (event) => {
  const trackingNumber = getRouterParam(event, 'trackingNumber')

  const order = await Order.findOne({ trackingNumber })

  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Order not found'
    })
  }

  return order
})