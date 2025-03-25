<script setup lang="ts">
import services from '~/data/services';
</script>

<template>
  <section id="services" class="bg-white px-4 lg:px-24 py-20">
    <div class="grid gap-10 lg:grid-cols-3">

      <div class="lg:col-span-1">
        <SubtitleText text="Our Services" />
        <h3 class="rubik text-4xl font-bold mt-5">
          Safe & Reliable Cargo Solutions
        </h3>
      </div>

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
  </section>
</template>