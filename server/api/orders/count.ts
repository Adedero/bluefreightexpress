import Order from "~/server/models/order.model"

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  
  const count = await Order.estimatedDocumentCount()
  return count
})