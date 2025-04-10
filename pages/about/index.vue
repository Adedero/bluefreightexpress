<script setup lang="ts">
useHead({
  title: 'About'
})
</script>

<template>
  <div>
    <NuxtLayout name="main-default">
      <AboutTopSection />
      <AboutOverview />
      <AboutDetails />
      <AboutFaq />
      <Affiliates />
    </NuxtLayout>
  </div>
</template>