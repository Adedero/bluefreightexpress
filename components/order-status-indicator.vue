<script setup lang="ts">
import type { TOrder } from '~/definitions'

const { status, freightMode } = defineProps<{
  status: TOrder['status'],
  freightMode: TOrder['freightMode']
}>()

const statusSteps = ['processing', 'shipped', 'in transit', 'delivered']

// Check if a given step is active (current or before current)
const isStepActive = (step: string) => {
  return statusSteps.indexOf(step) <= statusSteps.indexOf(status)
}

const isCurrentStep = (step: string) => {
  return statusSteps.indexOf(step) === statusSteps.indexOf(status)
}
</script>

<template>
  <div class="border rounded-md overflow-hidden">
    <div class="flex gap-1 rubik px-4 py-2 bg-primary-500 text-white">
      <h3>Order Status:</h3>
      <p class="font-semibold">{{ toTitleCase(status) }}</p>
    </div>

    <div v-if="status !== 'cancelled'" class="bg-white flex items-center justify-center px-4 py-4 min-w-0 w-full overflow-x-auto">
      <template v-for="(step, index) in statusSteps" :key="step">
        <!-- Step Icon -->
        <div class="flex items-center">
          <div
            class="rounded-full p-1.5 grid place-content-center aspect-square"
            :class="isStepActive(step) ? 'bg-blue-500 text-white' : 'bg-slate-200'"
          >
            <Icon
              v-if="step === 'processing'"
              name="lucide:clock"
              size="1.4rem"
            />
            <Icon
              v-else-if="step === 'shipped'"
              name="lucide:package-check"
              size="1.4rem"
            />
            <Icon
              v-else-if="step === 'in transit' && freightMode === 'air'"
              name="lucide:plane"
              size="1.4rem"
            />
            <Icon
              v-else-if="step === 'in transit' && freightMode === 'ocean'"
              name="lucide:ship"
              size="1.4rem"
            />
            <Icon
              v-else-if="step === 'in transit'"
              name="lucide:truck"
              size="1.4rem"
            />
            <Icon
              v-else-if="step === 'delivered'"
              name="lucide:map-pin-check"
              size="1.4rem"
            />
          </div>

          <!-- Progress Line (if not the last step) -->
          <div v-if="index < statusSteps.length - 1" class="w-10 md:w-24 xl:w-32 h-1 bg-slate-200 relative overflow-hidden">
            <div
              class="h-full absolute top-0 left-0 transition-all duration-300"
              :class="{
                'bg-blue-500 w-full': isStepActive(statusSteps[index + 1]),
                'bg-blue-500 w-1/2': isCurrentStep(step),
                'bg-slate-200 w-0': !isStepActive(statusSteps[index + 1]) && !isCurrentStep(step),
              }"
            ></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

