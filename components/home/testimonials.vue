<script setup lang="ts">
import testimonial_1 from '~/assets/img/testimonial-1.jpg'
import testimonial_2 from '~/assets/img/testimonial-2.jpg'
import testimonial_3 from '~/assets/img/testimonial-3.jpg'
import testimonial_4 from '~/assets/img/testimonial-4.jpg'

const testimonials = [
  {
    name: 'Elena Fischer',
    job: 'Freight Forwarder, Zurich',
    message: "Blue Freight Express has been an absolute game-changer for our supply chain. Their efficiency and real-time tracking make international shipping seamless!",
    image: testimonial_1
  },
  {
    name: 'Lukas Meier',
    job: 'Operations Manager, Munich',
    message: "Reliability is key in logistics, and Blue Freight Express delivers every time. Their professionalism and on-time delivery are unmatched.",
    image: testimonial_2
  },
  {
    name: 'Matteo Rossi',
    job: 'Warehouse Supervisor, Milan',
    message: "Our business depends on fast and secure shipping, and Blue Freight Express never lets us down. Highly recommended for European freight!",
    image: testimonial_3
  },
  {
    name: 'Sophie Dubois',
    job: 'E-commerce Manager, Geneva',
    message: "The customer support and seamless freight solutions from Blue Freight Express have helped our online store grow exponentially!",
    image: testimonial_4
  }
]

const carouselContainer = useTemplateRef('carousel-container')

const { next, prev } = useCarousel(carouselContainer, {
  itemsVisible: 2,
  transition: 'slide',
  cyclic: true,
  interval: 3000,
})
</script>

<template>
  <section id="testimonials" class="bg-white px-4 lg:px-24 py-20">
    <SubtitleText text="Testimonials" />
    <div class="flex items-center justify-between">
      <h3 class="rubik text-4xl font-bold mt-5">
        Safe & Reliable Cargo Solutions
      </h3>

      <div class="hidden lg:flex items-center gap-6">
        <button @click="prev" class="rounded-full aspect-square bg-accent hover:bg-primary-500 transition-colors text-primary-500 hover:text-accent p-3">
          <Icon name="lucide:arrow-left" size="1.5rem" />
        </button>

        <button @click="next" class="rounded-full aspect-square bg-accent hover:bg-primary-500 transition-colors text-primary-500 hover:text-accent p-3">
          <Icon name="lucide:arrow-right" size="1.5rem" />
        </button>
      </div>
    </div>

    <div ref="carousel-container" class="mt-5 overflow-x-auto">
      <div v-for="t in testimonials" :key="t.name" class="carousel-item px-10 py-8">
        <header class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <img :src="t.image" class="w-20 md:w-24 aspect-square rounded-full object-cover" />
            <div class="rubik">
              <p class="text-lg md:text-xl font-medium">{{ t.name }}</p>
              <p>{{ t.job }}</p>
            </div>
          </div>

          <div class="w-16 aspect-square rounded-full bg-gradient-to-r from-accent to-amber-300 text-primary grid place-content-center">
            <Icon name="my-icon:quote" size="1.3rem" />
          </div>
        </header>

        <div class="mt-5">
          <p class="message">{{ t.message }}</p>
        </div>

        <footer class="mt-8 text-accent flex items-center gap-2">
          <Icon v-for="i in 5" :key="i" name="my-icon:star" size="1.3rem" />
        </footer>
      </div>
    </div>

    <div class="mt-5 flex items-center justify-center gap-10 lg:hidden">
        <button class="rounded-full aspect-square bg-accent hover:bg-primary-500 transition-colors text-primary-500 hover:text-accent p-3">
          <Icon name="lucide:arrow-left" size="1.5rem" />
        </button>

        <button class="rounded-full aspect-square bg-accent hover:bg-primary-500 transition-colors text-primary-500 hover:text-accent p-3">
          <Icon name="lucide:arrow-right" size="1.5rem" />
        </button>
      </div>
  </section>
</template>

<style scoped>
.carousel-item:nth-of-type(odd) {
  @apply bg-surface;
  .message {
    @apply text-slate-500
  }
}
.carousel-item:nth-of-type(even) {
  @apply bg-primary-500 text-white;
  .message {
    @apply text-white
  }
}
</style>