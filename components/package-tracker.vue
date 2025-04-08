<script setup lang="ts">
const trackingNumber = ref<string>('')
const errorMsg = ref<string>('')

const track = () => {
  if (!trackingNumber.value) return
  navigateTo(`/track/${trackingNumber.value}`)
}
</script>

<template>
  <div class="w-full px-4 lg:px-24 py-20 bg-[--color-surface]">
    <div class="w-full h-full flex shadow-md">
      <input type="search" v-model.trim="trackingNumber" @keydown.enter="track" placeholder="Enter Tracking Number" class="tracking-id-input flex-grow" />
      <MyButton @click="track" text="Track" icon="lucide:package-search" :disabled="!trackingNumber?.trim()" />
      <!-- <button class="tracking-btn" :disabled="!trackingNumber?.trim()">Track</button> -->
    </div>
    <small v-if="errorMsg" class="text-red-500 font-semibold">{{ errorMsg }}</small>
  </div>
</template>

<style scoped>
.tracking-id-input {
  background-color: transparent;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-primary-500);
  outline: none;
  color: var(--color-primary-500);
  font-weight: 500;
}

.tracking-btn {
  padding: 0.8rem 2rem;
  background-color: var(--color-primary-500);
  color: white;
  font-weight: 600;
  transition: 2ms ease-out;

  &:hover {
    background-color: var(--accent-color);
    color: var(--color-primary-500);
  }

  &:disabled {
    background-color: var(--color-primary-400);
    color: var(--color-primary-100);
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: var(--color-primary-400);
    color: var(--color-primary-100);
  }
}
</style>