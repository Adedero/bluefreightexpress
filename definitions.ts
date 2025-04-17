import type { ObjectId } from "mongoose"

export type TUser = {
  name: string
  email?: string
  password?: string,
  role: 'USER' | 'ADMIN'
}

export type TOrder = {
  user: ObjectId | TUser
  orderId: string
  trackingNumber: string
  priority: 'low' | 'medium' | 'high'
  freightMode: 'air' | 'ocean' | 'road'
  deliveryMode: 'home' | 'pickup station'
  status: 'processing' | 'shipped' | 'in transit' | 'delivered' | 'cancelled'
  items: {
    _id: string;
    name: string;
    quantity: number;
    unitPrice: number;
  }[]
  totalPrice: number
  trackingUpdates: {
    _id: string
    status: 'processing' | 'shipped' | 'in transit' | 'delivered' | 'cancelled'
    severity: 'info' | 'success' | 'error'
    comment: string
    location: {
      name?: string
      address: string
      city: string
      state: string
      country: string
      countryCode: string
      lat: number
      lng: number
    }
    timestamp: Date
  }[]
  destination: {
    name?: string
    address: string
    city: string
    state: string
    country: string
    countryCode: string
    description?: string
    lat: number
    lng: number
  },
  estimatedDelivery: Date | string
  deliveredAt?: Date | string
  createdAt: Date | string
  updatedAt: Date | string
}