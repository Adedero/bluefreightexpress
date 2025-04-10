<script setup lang="ts">
useHead({
  title: 'Home'
})
</script>

<template>
  <div>
    <NuxtLayout name="main-default">
      <HomeHero />
      <PackageTracker />
      <HomeServices />
      <HomeWhyUs />
      <HomeTestimonials />
      <Affiliates />
      <HomeFaq />
      <img src="~/assets/img/harbour-2.jpg" class="w-dvw">
    </NuxtLayout>
  </div>
</template>