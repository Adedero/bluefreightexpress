<script setup lang="ts">
const trackingNumber = ref<string>('')
const errorMsg = ref<string>('')
</script>

<template>
  <div class="w-full px-4 lg:px-24 py-20 bg-surface">
    <div class="w-full h-full flex shadow-md">
      <input type="text" v-model="trackingNumber" placeholder="Enter Tracking Number" class="tracking-id-input flex-grow" />
      <button class="tracking-btn" :disabled="!trackingNumber?.trim()">Track</button>
    </div>
    <small v-if="errorMsg" class="text-red-500 font-semibold">{{ errorMsg }}</small>
  </div>
</template>

<style scoped>
.tracking-id-input {
  background-color: transparent;
  padding: 0.8rem 1rem;
  border: 1px solid var(--primary-color-500);
  outline: none;
  color: var(--primary-color-500);
  font-weight: 500;
}

.tracking-btn {
  padding: 0.8rem 2rem;
  background-color: var(--primary-color-500);
  color: white;
  font-weight: 600;
  transition: 2ms ease-out;

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-color-500);
  }

  &:disabled {
    background-color: var(--primary-color-400);
    color: var(--primary-color-100);
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: var(--primary-color-400);
    color: var(--primary-color-100);
  }
}
</style>