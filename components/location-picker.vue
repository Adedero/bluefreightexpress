<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'

import markerIcon2x from '~/assets/img/leaflet-marker-icon-2x.png';
import markerIcon from '~/assets/img/leaflet-marker-icon.png';
import markerShadow from '~/assets/img/leaflet-marker-shadow.png';

const { height = '350px' } = defineProps<{
  height?: string
}>()

export interface PickedLocation {
  lat: number
  lng: number
  name: string
  address: string
  country: string
  countryCode: string
  state: string
  city: string
  town: string
  village: string
}

const emit = defineEmits<{
  (e: 'locationPicked', location: PickedLocation): void
}>()

const pickedLocation = ref<PickedLocation | null>(null)
const loading = ref(false)
const marker = ref<L.Marker | null>(null)
const el = useTemplateRef('map-el')
const map = ref()

const clearSelection = () => {
  if (marker.value && map.value) {
    map.value.removeLayer(marker.value)
    marker.value = null
  }
  pickedLocation.value = null
}

onMounted(async () => {
  if (!el.value || !import.meta.client) return

  const L = await import('leaflet')
  const Geocoder = (await import('leaflet-control-geocoder')).default

  delete (L.Icon.Default.prototype as any)._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow
  });

  map.value = L.map(el.value).setView([0, 0], 5)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map.value)

  const handleLocation = async (lat: number, lng: number) => {
    loading.value = true
    try {
      const data = await $fetch<any>('https://nominatim.openstreetmap.org/reverse', {
        params: {
          format: 'jsonv2',
          lat,
          lon: lng
        }
      })

      const address = data.address || {}

      pickedLocation.value = {
        lat,
        lng,
        name: data.name || '',
        address: data.display_name || '',
        country: address.country || '',
        countryCode: address.country_code || '',
        state: address.state || '',
        city: address.city || '',
        town: address.town || '',
        village: address.village || ''
      }

      emit('locationPicked', pickedLocation.value)

      // Remove previous marker
      if (marker.value && map.value) {
        map.value.removeLayer(marker.value)
      }

      // Add new marker
      marker.value = L.marker([lat, lng])
        .addTo(map.value)
        .bindPopup(data.display_name || 'Selected location')
        .openPopup()
    } catch (err) {
      console.error('Error during reverse geocoding', err)
    } finally {
      loading.value = false
    }
  }

  const geocoder = new Geocoder({ defaultMarkGeocode: true }).addTo(map.value)

  geocoder.on('markgeocode', (e: any) => {
    const { lat, lng } = e.geocode.center
    map.value!.setView([lat, lng], 13)
    handleLocation(lat, lng)
  })

  map.value.on('click', (e: any) => {
    const { lat, lng } = e.latlng
    handleLocation(lat, lng)
  })
})

</script>

<template>
  <div>
    <div ref="map-el" class="w-full rounded-md overflow-hidden" :style="{ height }" />

    <div v-if="pickedLocation" class="mt-4 p-4 bg-gray-50 border rounded shadow-sm relative">
      <div v-if="loading" class="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
        <span class="text-sm text-gray-600 animate-pulse">Loading location...</span>
      </div>

      <p><strong>Lat:</strong> {{ pickedLocation.lat }}</p>
      <p><strong>Lng:</strong> {{ pickedLocation.lng }}</p>
      <p><strong>Address:</strong> {{ pickedLocation.address }}</p>
      <p><strong>City:</strong> {{ pickedLocation.city || pickedLocation.town || pickedLocation.village }}</p>
      <p><strong>State:</strong> {{ pickedLocation.state }}</p>
      <p><strong>Country:</strong> {{ pickedLocation.country }}</p>

      <button
        class="mt-3 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
        @click="clearSelection"
        :disabled="loading"
      >
        Clear Selection
      </button>
    </div>
  </div>
</template>
