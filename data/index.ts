import type { TOrder } from "~/definitions";

export const site = {
  name: 'Next Port Express',
  abbr: 'NPE',
  emails: [
    'info@nextportexpress.com',
    'expressnextport@gmail.com'
  ],
  address: 'Office 810, Messeplatz 1',
  city: 'Basel',
  state: 'Basel-Stadt',
  country: 'Switzerland',
  countryAbbr: 'CH',
  openHours: 'Mon - Sat 9.00 - 18.00\nSunday Closed'
}

export const priorities: TOrder['priority'][] = ['low', 'medium', 'high']

export const orderStatuses: TOrder['status'][] = ['processing', 'shipped', 'in transit', 'delivered', 'cancelled']

export const freightModes: TOrder['freightMode'][] = ['air', 'ocean', 'road']

export const deliveryModes: TOrder['deliveryMode'][] = ['home', 'pickup station']

export const trackingUpdateSeverities: TOrder['trackingUpdates'][0]['severity'][] = ['info', 'success', 'error']