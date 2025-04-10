<script setup lang="ts">
useHead({
  title: 'Track'
})
</script>

<template>
  <div>
    <NuxtLayout name="main-default">
      <section class="w-screen h-[28rem] relative flex items-center gap-16 px-4 lg:px-24">
        <div class="text-white flex flex-col gap-6">
          <SubtitleText text="Package Tracker" dark />

          <h1 class="rubik text-4xl md:text-6xl font-bold text-white text-balance">
            Track
          </h1>

          <p class="font-medium max-w-[36rem]">
            Follow up on your packages with our secure and reliable tracking system.
          </p>
        </div>

        <div class="w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/50 to-transparent" />
        <img src="~/assets/img/map.jpg" class="w-full h-full object-cover object-top absolute left-0 bottom-0 -z-10">
      </section>
      
      <div class="mb-20">
        <PackageTracker />
      </div>

      <Affiliates />
    </NuxtLayout>
  </div> 
</template>