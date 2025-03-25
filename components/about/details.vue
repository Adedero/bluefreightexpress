<script setup lang="ts">
const details = [
  {
    title: 'Who We Are',
    content: 'Blue Freight Express is a trusted logistics partner, specializing in seamless global shipping, freight forwarding, and supply chain solutions.',
    icon: 'lucide:building'
  },
  {
    title: 'What We Do',
    content: 'We provide fast, reliable, and cost-effective logistics services, including air, sea, and land freight, customs clearance, and last-mile delivery.',
    icon: 'lucide:package'
  },
  {
    title: 'Our Goal',
    content: 'To redefine logistics efficiency by delivering exceptional, on-time services tailored to our clients’ evolving needs.',
    icon: 'lucide:target'
  },
  {
    title: 'Our Mission',
    content: 'To connect businesses and individuals through innovative logistics solutions, ensuring smooth and secure transportation of goods worldwide.',
    icon: 'lucide:globe'
  },
  {
    title: 'Our Values',
    content: 'Integrity, reliability, innovation, and customer commitment drive everything we do at Blue Freight Express.',
    icon: 'lucide:heart'
  },
  {
    title: 'The Services We Provide',
    content: 'Our offerings include international freight forwarding, warehousing, cargo tracking, express delivery, and customs brokerage.',
    icon: 'lucide:truck'
  }
]
</script>

<template>
  <div class="py-20 bg-surface px-4 lg:px-24">
    <header class="flex flex-col items-center justify-center gap-4">
      <SubtitleText text="About Us" dark />
      <h3 class="rubik text-4xl font-bold">Shipping and Logistics</h3>
    </header>

    <div class="mt-16 grid gap-10 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      <div v-for="detail in details" :key="detail.title">
        <div class="w-16 p-4 rounded-full aspect-square flex items-center justify-center bg-gradient-to-r from-accent to-amber-200">
          <Icon :name="detail.icon" size="2rem"/>
        </div>

        <p class="mt-5 text-[1.3rem] rubik">{{ detail.title }}</p>

        <p class="mt-2 text-slate-500">
          {{ detail.content }}
        </p>
      </div>
    </div>

    <div class="flex items-center justify-center mt-12">
      <NuxtLink to="/services">
        <MyButton text="Explore Our Services" />
      </NuxtLink>
    </div>
  </div>
</template>