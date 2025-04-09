<script setup lang="ts">
import type { PickedLocation } from './location-picker.vue'

const visible = ref(false)

const emit = defineEmits(['locationPicked'])

const pickedLocation = ref<PickedLocation | null>(null)
const onLocationPicked = (location: PickedLocation) => {
  pickedLocation.value = location
  emit('locationPicked', location)
}
</script>

<template>
  <div>
    <div @click="visible = true">
      <slot />
    </div>

    <PrimeDialog v-model:visible="visible" @hide="pickedLocation = null" header="Location Picker" class="w-full md:w-[80vw]">
      <div v-if="pickedLocation" class="text-sm mb-2">
        <p>Location selected</p>
        <div class="font-bold flex items-center gap-1">
          <span class="pi pi-map-marker"></span>
          <span>{{ pickedLocation.address }}</span>
        </div>
      </div>
      <LocationPicker @locationPicked="onLocationPicked" />

      <template #closebutton="{ closeCallback }">
        <PrimeButton @click="closeCallback()" v-if="!pickedLocation" severity="secondary" icon="pi pi-times" rounded text />
        <PrimeButton @click="closeCallback()" v-else icon="pi pi-check" label="Continue" size="small" />
      </template>
    </PrimeDialog>
  </div>
</template>