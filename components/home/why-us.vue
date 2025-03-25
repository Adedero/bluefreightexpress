<script setup lang="ts">
import liquid_transportation from '~/assets/img/liquid-transportation.jpg'
import packaging_solutions from  '~/assets/img/packaging-solutions.jpg'
import contract_logistics from '~/assets/img/contract-logistics.jpg'
import warehouse_and_distribution from '~/assets/img/warehouse-&-distribution.jpg'
import specialized_transport from '~/assets/img/specilaized-transport.jpg'

const list = [
  { title: 'Safe Package', icon: 'lucide:box' },
  { title: 'Ship Everywere', icon: 'lucide:ship' },
  { title: 'Global Tracking', icon: 'lucide:globe' },
  { title: '24/7 Support', icon: 'lucide:headphones' },
  { title: 'In Time Delivery', icon: 'lucide:clock' },
  { title: 'Transparent Pricing', icon: 'lucide:hand-coins' }
]

const works = [
  { title: 'Liquid Transportation', subtitle: 'Premium Tankers', image: liquid_transportation },
  { title: 'Packaging Solutions', subtitle: 'Warehouse Management', image: packaging_solutions },
  { title: 'Contract Logistics', subtitle: 'Road Transportation', image: contract_logistics },
  { title: 'Warehouse & Distribution', subtitle: 'Large Warehouse', image: warehouse_and_distribution },
  { title: 'Specialized Transport', subtitle: 'Ocean Transports', image: specialized_transport }
]
</script>

<template>
  <section id="why-us" class="flex flex-col items-center">
    <div class="w-dvw h-[30rem] bg-gradient-to-t from-primary-500 to-transparent relative">
      <img src="~/assets/img/containers-2.jpg" alt="containers" class="absolute w-full h-full object-cover -z-10" />  
    </div>

    <div class="w-[95vw] md:w-[90vw] -translate-y-28 bg-white px-4 md:px-12 pt-8 lg:pt-20 lg:px-24">
      <div class="w-full grid lg:grid-cols-2 gap-y-10">
        <div class="grid gap-6">
          <SubtitleText text="Why Us?" />
          <h3 class="rubik text-4xl font-bold">We Provide Full Range Global Logistics Solution</h3>
          <div class="text-slate-500">
            <p>
              We strive to understand what they'e going through, what they need, what their price points are, and what's important to them and their customers.
            </p>
            <p>
              We historically build meaningful relationships with our customers. We connect with our customers. We care.
            </p>
          </div>
        
          <div class="grid gap-6">
            <div class="flex items-center gap-4">
              <div class="p-4 rounded-full aspect-square flex items-center justify-center bg-gradient-to-r from-accent to-amber-200">
                <Icon name="lucide:container" size="2rem"/>
              </div>
              <p class="text-[1.3rem] rubik">Delivery on time</p>
            </div>

            <div class="flex items-center gap-4">
              <div class="p-4 rounded-full aspect-square flex items-center justify-center bg-gradient-to-r from-accent to-amber-200">
                <Icon name="lucide:credit-card" size="2rem"/>
              </div>
              <p class="text-[1.3rem] rubik">Optimised travel costs</p>
            </div>
          </div>
        </div>

        <div class="relative flex justify-end">
          <img src="~/assets/img/port.jpg" alt="plane" class="h-[30rem] w-full lg:h-[90%] lg:w-[90%] object-cover">

          <img src="~/assets/img/warehouse-workers-1.jpg" class="absolute w-80 h-56 left-0 -bottom-0 object-cover border-t-[24px] border-r-[24px] border-white" />
        </div>
      </div>

      <div class="mt-16 border-y grid gap-y-12 md:grid-cols-2">
        <div class="flex flex-col lg:flex-row items-center justify-center py-8 gap-4 md:border-r">
          <p class="rubik text-3xl md:text-5xl font-bold">81,294</p>
          <div class="flex items-center gap-2">
            <div class="w-4 aspect-square bg-gradient-to-r from-accent to-amber-200"></div>
            <p class="text-lg md:text-xl">Delivered Packages</p>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-center py-8 gap-4 md:border-l">
          <p class="rubik text-3xl md:text-5xl font-bold">13,594</p>
          <div class="flex items-center gap-2">
            <div class="w-4 aspect-square bg-gradient-to-r from-accent to-amber-200"></div>
            <p class="text-lg md:text-xl">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-screen grid lg:grid-cols-2 lg:min-h-screen">
      <div class="h-80 lg:h-full bg-primary-500 relative overflow-x-visible">
        <img src="~/assets/img/cargo-plane.jpg" class="object-cover absolute w-[95vw] h-[26rem] top-20 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-0 lg:left-12 lg:h-[28rem] lg:w-screen" />
      </div>

      <div class="lg:h-full bg-surface flex flex-col gap-5 items-center justify-center pt-52 pb-10 px-4 md:px-12 lg:py-10 lg:pl-20">
        <h3 class="rubik text-4xl font-bold">We create an opportunity to reach business potential</h3>
        <p class="text-slate-500">
          Logistics is a distinguished supply chain management firm which provides comprehensive solutions for warehousing, transportation and a host of logistics services.
        </p>

        <div class="mt-3 w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          <div v-for="item in list" :key="item.title" class="flex items-center gap-4">
            <div class="p-4 rounded-full aspect-square flex items-center justify-center bg-gradient-to-r from-accent to-amber-200">
              <Icon :name="item.icon" size="2rem"/>
            </div>
            <p class="text-[1.3rem] rubik">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>


    <div class="pt-10">
      <div class="py-10">
        <h3 class="rubik text-4xl font-bold text-center">Transporting across the world</h3>
      </div>

      <div class="bg-accent w-screen px-4 md:px-12 lg:px-23 py-4 md:py-10">
        <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
          <div v-for="work in works" :key="work.title" class="relative h-72">
            <div class="p-4 absolute z-[3] w-full h-full left-0 top-0 flex flex-col justify-end text-center">
              <p class="font-semibold text-white rubik text-lg">{{ work.title }}</p>
              <p class="text-accent">{{ work.subtitle }}</p>
            </div>
            <div class="absolute z-[2] w-full h-full left-0 top-0 bg-gradient-to-t from-primary-700 to-transparent to-[60%]" />
            <img :src="work.image" :alt="work.title" class="w-full h-full object-cover absolute z-[1] left-0 top-0" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>