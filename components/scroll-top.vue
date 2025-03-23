<script setup lang="ts">
const el = useTemplateRef('el')

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  if (window.scrollY > 400) {
    el.value?.classList.remove('opacity-0')
  } else {
    el.value?.classList.add('opacity-0')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button @click="scrollToTop" ref="el" class="fixed z-20 opacity-0 right-10 bottom-10 border border-white/20 aspect-square p-2 bg-primary-500 text-white hover:bg-accent hover:text-primary-500 transition-all">
    <Icon name="lucide:arrow-up" size="1.3rem" />
  </button>
</template>