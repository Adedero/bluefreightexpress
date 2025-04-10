<script setup lang="ts">
import services from '~/data/services';

useHead({
  title: 'Services'
})
</script>

<template>
  <div>
    <NuxtLayout name="main-default">
      <section id="servives-top-section" class="w-screen h-96 relative flex items-center gap-16 px-4 lg:px-24">
        <div class="text-white flex flex-col gap-6">
          <SubtitleText text="Fast International Cargo Services" dark />

          <h1 class="rubik text-4xl md:text-6xl font-bold text-white text-balance">
            Our Services
          </h1>

          <p class="font-medium max-w-[36rem]">
            We provide international cargo services
          </p>
        </div>

        <div class="w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/70 to-transparent"></div>
        <img src="~/assets/img/harbour.jpg" class="w-full h-full object-cover absolute left-0 bottom-0 -z-10">
      </section>
      
      <div class="px-4 lg:px-24 py-20 bg-surface mb-20">
        <div class="lg:col-span-2 grid md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-12 md:gap-8">
          <div v-for="service in services" :key="service.id" class="grid md:grid-cols-5 gap-2 md:gap-8">
            <div class="col-span-1">
              <Icon :name="`my-icon:${service.icon}`" :size="service.iconSize" />
            </div>
            <div class="col-span-4 md:border-l md:pl-4 grid gap-4">
              <NuxtLink :to="`/services/${service.slug}`" class="text-2xl rubik hover:text-accent transition-colors">{{ service.name }}</NuxtLink>

              <p class="text-slate-500">{{ service.preview }}</p>
            </div>
          </div>
        </div>
      </div>
      <Affiliates />
    </NuxtLayout>
  </div>
</template>