import Order from "~/server/models/order.model"
import User from "~/server/models/user.model"
import type { TOrder } from "~/definitions"

export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const id = getRouterParam(event, 'id')
  const order = await readBody(event)

  if (!order) {
    throw createError({
      statusCode: 400,
      data: {
        statusMessage: 'No order data provided'
      }
    })
  }

  if (!order.user) {
    throw createError({
      statusCode: 400,
      data: {
        statusMessage: 'User is required'
      }
    })
  }

  if (!order.destination) {
    throw createError({
      statusCode: 400,
      data: {
        statusMessage: 'Destination is required'
      }
    })
  }

  let orderToUpdate = await Order.findById<TOrder>(id).populate('user')

  if (!orderToUpdate) {
    throw createError({
      statusCode: 404,
      data: {
        statusMessage: 'Order not found'
      }
    })
  }

  //Check email duplicity is email is being changed
  //@ts-expect-error
  if (order.user.name !== orderToUpdate.user.name || order.user.email !== orderToUpdate.user.email) {
    //@ts-expect-error
    if (order.user.email !== orderToUpdate.user.email) {
      const existingUser = await User.findOne({ email: order.user.email })
      if (existingUser) {
        throw createError({
          statusCode: 400,
          data: {
            statusMessage: 'Email already exists'
          }
        })
      }
    }
    //@ts-expect-error
    const user = await User.findOne({ email: orderToUpdate.user.email })
    if (!user) {
      throw createError({
        statusCode: 404,
        data: {
          statusMessage: 'User not found'
        }
      })
    }
    user.name = order.user.name
    user.email = order.user.email
    await user.save()
  }

  if (!order.items || order.items.length === 0) {
    throw createError({
      statusCode: 400,
      data: {
        statusMessage: 'At least one item is required'
      }
    })
  }

  //Remove _id fields from all elements in items and updates
  order.items = order.items.map((item: Record<string, any>) => {
    delete item._id
    return item
  })
  order.trackingUpdates = order.trackingUpdates.map((update: Record<string, any>) => {
    delete update._id
    return update
  })

  //Arrange tracking updates order to be from latest
  order.trackingUpdates.sort((a: Record<string, any>, b: Record<string, any>) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  //Calculate totalPrice
  //order.totalPrice = order.items.reduce((acc: number, item: Record<string, any>) => acc + (item.quantity * item.unitPrice), 0)

  //Update order
  orderToUpdate.priority = order.priority
  orderToUpdate.status = order.status
  orderToUpdate.freightMode = order.freightMode
  orderToUpdate.deliveryMode = order.deliveryMode
  orderToUpdate.destination = order.destination
  orderToUpdate.items = order.items
  orderToUpdate.totalPrice = order.totalPrice
  orderToUpdate.trackingUpdates = order.trackingUpdates
  orderToUpdate.estimatedDelivery = order.estimatedDelivery

  // Save the updated order
  // @ts-expect-error
  await orderToUpdate.save()

  return { order: orderToUpdate }
})