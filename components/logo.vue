<script setup lang="ts">
const { color } = defineProps<{
  color?: string
}>()
</script>
<template>
  <div class="wrapper grid grid-cols-2 gap-[3.5px] w-fit h-fit">
    <div class="w-[10px] aspect-square bg-cyan-400 rotate-[60deg] -translate-x-[3px]"></div>
    <div class="w-[10px] aspect-square bg-cyan-400"></div>
    <div class="w-[10px] aspect-square bg-cyan-400"></div>
    <div class="w-[10px] aspect-square bg-cyan-400"></div>
  </div>
</template>

<style scoped>
.wrapper * {
  background-color: v-bind(color);
}
</style>