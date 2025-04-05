import type { Collection, ObjectId } from "mongoose"

export type TUser = {
  name: string
  email: string
  password: string
}

export type TOrder = {
  user: ObjectId | Collection<TUser>
  orderId: string
  trackingNumber: string
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
    location?: string
    coordinates?: { lat: number; lng: number }
    timestamp: Date
  }[]
  destination: {
    name?: string
    address: string
    city: string
    state: string
    country: string
    description?: string
  },
  estimatedDelivery: Date
}