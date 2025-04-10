import Order from "~/server/models/order.model"
//import type { TOrder } from '~/definitions'

export default defineEventHandler(async (event) => {
  const trackingNumber = getRouterParam(event, 'trackingNumber')

  const order = await Order.findOne({ trackingNumber }).populate('user')

  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Order not found'
    })
  }

  if (order.status === 'delivered') {
    (order as Record<string, any>).trackingUpdates.unshift({
      status: 'delivered',
      severity: 'success',
      comment: 'Order has been delivered',
      location: order.destination,
      timestamp: order.deliveredAt || new Date()
    })
  }

  return order
})