import Order from "~/server/models/order.model"

export default defineEventHandler(async (event) => {
  const { limit = 20, page = 1 } = getQuery(event)

  const orders = await Order
    .find()
    .sort({ createdAt: -1 })
    .populate('user')
    .limit(Number(limit))
    .skip(Number(page) * Number(limit))
    .lean()

  return orders
})