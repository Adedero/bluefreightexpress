import type { TOrder } from "~/definitions";

export const orderStatuses: TOrder['status'][] = ['processing', 'shipped', 'in transit', 'delivered', 'cancelled']

export const freightModes: TOrder['freightMode'][] = ['air', 'ocean', 'road']

export const deliveryModes: TOrder['deliveryMode'][] = ['home', 'pickup station']

export const trackingUpdateSeverities: TOrder['trackingUpdates'][0]['severity'][] = ['info', 'success', 'error']