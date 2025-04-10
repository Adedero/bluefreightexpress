<script setup lang="ts">
import type { TOrder } from '~/definitions';

const { update, freightMode } = defineProps<{
  update: TOrder['trackingUpdates'][number]
  freightMode?: TOrder['freightMode']
}>()

function getStatusIcon() {
  if (update.status === 'processing') {
    return 'lucide:clock'
  }
  if (update.status === 'shipped') {
    return 'lucide:package-plus'
  }
  if (update.status === 'in transit') {
    return getFreightModeIcon()
  }
  if (update.status === 'delivered') {
    return 'lucide:package-open'
  }
  return 'lucide:map-pin-x'
}

function getFreightModeIcon() {
  if (freightMode === 'air') {
    return 'lucide:plane'
  }
  if (freightMode === 'ocean') {
    return 'lucide:ship'
  }
  if (freightMode === 'road') {
    return 'lucide:truck'
  }
  return 'lucide:package'
}

function getComputedSeverityStyles(): { icon: string, color: string } {
  if (update.severity === 'error') {
    return {
      icon: 'lucide:triangle-alert',
      color: '#f59e0b '
    }
  }
  if (update.severity === 'success') {
    return {
      icon: 'lucide:circle-check-big',
      color: '#10b981' 
    }
  }
  return {
    icon: getFreightModeIcon(),
    color: '#3b82f6'
  }
}
</script>

<template>
  <div class="bg-white border rounded-md p-2">
    <div class="flex items-start gap-2">
      <div class="p-2 aspect-square rounded-full grid place-content-center text-white" :style="{ backgroundColor: getComputedSeverityStyles().color }">
        <Icon :name="getComputedSeverityStyles().icon" />
      </div>
      <div class="w-full">
        <p class="font-semibold text-primary-500">{{ update.location.address }}</p>
        <p class="text-sm text-slate-500">{{ update.comment }}</p>

        <div class="mt-2 grid gap-2 md:w-full md:flex md:flex-wrap md:justify-between">
          <div
            class="w-fit rubik px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"
            :class="[update.status === 'cancelled' ? 'bg-red-100 text-red-500': update.status === 'delivered' ? 'bg-emerald-100 text-emerald-500' : 'bg-blue-100 text-blue-500']">
            <Icon :name="getStatusIcon()" />
            <span>{{ toTitleCase(update.status) }}</span>
          </div>

          <div class="w-fit rubik px-2 py-1 rounded-md bg-slate-100 text-slate-600 font-medium text-xs">
            {{ useDateFormat(update.timestamp, 'ddd, MMM DD, YYYY | h:mm AA') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>