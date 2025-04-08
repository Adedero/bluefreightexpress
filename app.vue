<script setup lang="ts">
import * as AOS from 'aos'
import 'aos/dist/aos.css';
import 'primeicons/primeicons.css'

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
  <PrimeToast class="max-w-96" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
