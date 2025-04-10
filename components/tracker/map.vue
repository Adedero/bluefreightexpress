<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import type { TOrder } from '~/definitions'
//import { Map } from "leaflet"
//import * as L from 'leaflet/dist/leaflet'

interface Props {
  height?: string | number
  updates: TOrder['trackingUpdates']
}
const {
  height = '500px',
  updates
} = defineProps<Props>()

const el = useTemplateRef('map-el')
const map = ref()

onMounted(async () => {
  if (!el.value || !globalThis.window) return
  const coords: [number, number] = [updates[0].location.lat, updates[0].location.lng]
  const leaflet = await import("leaflet")
  map.value = leaflet
    .map(el.value)
    .setView(coords, 10);

  leaflet
    .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
    .addTo(map.value);
  
  const latlngs: [number, number][] = []

  updates.forEach(update => {
    if (update.location) {
      latlngs.push([update.location.lat, update.location.lng])

      const formatedTimestamp = useDateFormat(update.timestamp, 'ddd, MMM DD, YYYY | h:mm AA')
      leaflet
        .marker([update.location.lat, update.location.lng])
        .addTo(map.value)
        .bindPopup(`
          <div style="font-weight: 500">
            <p style="font-weight: 600; ">${update.location.address}</p>
            <p style="font-size: 0.72rem;">${update.comment}</p>
            <p style="font-size: 0.72rem">${formatedTimestamp.value}</p>
          </div>
        `)
    }
  })

  const polyline = leaflet
    .polyline(latlngs, { color: 'red', smoothFactor: 0.6 })
    .addTo(map.value)
  
  map.value.fitBounds(polyline.getBounds());
})
</script>

<template>
  <div ref="map-el" class="w-full" :style="{ height }"></div>
</template>