<script setup lang="ts">
import * as AOS from 'aos'
import 'aos/dist/aos.css';

onMounted(() => {
  if (globalThis.document) {
    AOS.init({
      animatedClassName: 'aos',
      once: true
    })
  }
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
