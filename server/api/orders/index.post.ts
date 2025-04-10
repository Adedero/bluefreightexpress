import Order from "~/server/models/order.model"
import User from "~/server/models/user.model"

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  
  const order = await readBody(event)
  
  const { client } = order

  if (!client || !client.name || !client.email) {
    throw createError({
      statusCode: 400,
      data: {
        statusMessage: 'Client name and email are required'
      }
    })
  }

  //Check if the client already exists, if not create a new user based o client information
  let user = await User.findOne({ email: client.email })
  if (!user) {
    user = await User.create({
      name: client.name,
      email: client.email,
      role: 'USER'
    })
  }

  order.user = user._id

  //Validate items
  if (!order.items || order.items.length === 0) {
    throw createError({
      statusCode: 400,
      data: {
        statusMessage: 'At least one item is required'
      }
    })
  }

  if (order.items.some((item: Record<string, any>) => !item.name || !item.quantity || !item.unitPrice)) {
    throw createError({
      statusCode: 400,
      data: {
        statusMessage: 'All items must have a name, quantity, and unit price'
      }
    })
  }

  const newOrder = await Order.create(order)

  return { order: newOrder }
})