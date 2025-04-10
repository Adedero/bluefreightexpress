<script setup lang="ts">
import services from '~/data/services'

const { slug } = useRoute().params

const service = services.find((service) => service.slug === slug.toString())

useHead({
  title: service?.name || 'Service'
})
</script>

<template>
  <div v-if="service">
    <NuxtLayout name="main-default">
      <section class="w-screen h-[30rem] relative flex items-center gap-16 px-4 lg:px-24">
        <div class="text-white flex flex-col gap-6">
          <SubtitleText text="Service Detail" dark />

          <h1 class="rubik text-4xl md:text-6xl font-bold text-white text-balance">
            {{ service.name }}
          </h1>

          <p class="font-medium max-w-[36rem]">
            {{ service.preview }}
          </p>
        </div>

        <div class="w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/70 to-transparent" />
        <img src="~/assets/img/harbour-2.jpg" class="w-full h-full object-cover absolute left-0 bottom-0 -z-10 scale-x-[-1]">
      </section>

      <div class="py-20 px-4 lg:px-24">
        <img :src="service.previewImage" class="w-full">

        <div class="pt-20">
          <div class="flex items-center gap-5">
            <Icon :name="`my-icon:${service.icon}`" :size="service.iconSize" />

            <h4 class="rubik font-semibold text-3xl md:text-4xl">{{ service.name }} Services</h4>
          </div>

          <p class="whitespace-pre-wrap text-slate-500 mt-5">{{ service.content.introduction }}</p>
          
          <hr class="my-10" />
          
          <div class="relative">
            <div class="whitespace-pre-wrap text-slate-500">
              <img :src="service.image1" class="max-h-96 w-full md:w-1/3 md:float-right md:ml-4 mb-2 object-cover" />
              {{ service.content.body }}
            </div>
          </div>

          <hr class="my-10" />
          
          <div class="whitespace-pre-wrap text-slate-500 bg-surface px-6 py-5">
            {{ service.content.conclusion }}
          </div>
        </div>
      </div>

      <div class="grid gap-5 pb-20 px-4 lg:px-24">
        <SubtitleText text="Other Services" />
        <h4 class="rubik font-semibold text-3xl md:text-4xl">
          We Have More To Offer
        </h4>

        <div class="mt-10 flex gap-10 justify-center flex-wrap">
          <NuxtLink
            v-for="s in services.filter((ser) => ser.id !== service?.id) ?? []"
            :key="s.id"
            :to="`/services/${s.slug}`"
            class="group"
          >
            <div class="w-full max-w-72 h-96 relative overflow-hidden">
              <div class="absolute left-1/2 top-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-primary-500/80 text-white p-4 grid place-content-center gap-5 text-sm text-center text-balance transition-all translate-y-full group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300">
                <p>{{ s.preview }}</p>


                <div class="group-hover:underline flex items-center gap-1 font-semibold justify-center">
                  <span>More</span>
                  <Icon name="lucide:link" />
                </div>
              </div>
              <img :src="s.image1" class="w-full h-full object-cover">
            </div>
            <p class="group-hover:text-accent transition-colors text-center text-primary-500 mt-4 rubik font-semibold text-lg">{{ s.name }}</p>
          </NuxtLink>
        </div>
      </div>
      <Affiliates />
    </NuxtLayout>
  </div>
</template>