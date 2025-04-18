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
  <PrimeToast class="left-1/2 translate-x-[-50%] w-[95dvw] max-w-96 md:left-[unset] md:translate-x-[unset]" />
  <PrimeConfirmDialog class="max-w-96" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
