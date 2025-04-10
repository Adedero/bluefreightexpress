<script setup lang="ts">
const { color = '#ffb82b', size = '36' } = defineProps<{
  color?: string
  size?: string | number
}>()
</script>
<template>
  <svg :width="size" :height="size" viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg" :fill="color">
    <path d="M2 7 L40 50 L2 93 L28 93 L66 50 L28 7 Z" />
    <path d="M42 7 L80 50 L42 93 L68 93 L106 50 L68 7 Z" />
  </svg>
</template>
