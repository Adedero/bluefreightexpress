<script setup lang="ts">
const { color } = defineProps<{
  color?: string
}>()
</script>
<template>
  <div :class="`grid grid-cols-2 gap-[3.5px] w-fit h-fit ${color ? `*:bg-[${color}]` : ''}`">
    <div class="w-[10px] aspect-square bg-cyan-400 rotate-[60deg] -translate-x-[3px]"></div>
    <div class="w-[10px] aspect-square bg-cyan-400"></div>
    <div class="w-[10px] aspect-square bg-cyan-400"></div>
    <div class="w-[10px] aspect-square bg-cyan-400"></div>
  </div>
</template>