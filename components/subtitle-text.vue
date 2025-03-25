<script setup lang="ts">
const { text, bgColor, dark } = defineProps<{
  text?: string
  bgColor?: string
  dark?: boolean
}>()
</script>

<template>
  <div :class="['flex w-fit', bgColor ? `bg-${bgColor}` : dark ? 'bg-black/30 ' : 'bg-surface']">
    <div class="bg-accent w-[5px] h-full flex-shrink-0"></div>
    <p :class="['text-sm font-medium px-3 py-2', dark ? 'text-white' : '']">
      {{ text }}
    </p>
  </div>
</template>