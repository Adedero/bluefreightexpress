import Order from "~/server/models/order.model"

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  
  const id = getRouterParam(event, 'id')

  const order = await Order.findById(id).populate('user').lean()

  return order
})