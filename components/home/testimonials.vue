<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, type CarouselConfig } from 'vue3-carousel'
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

const carouselConfig: Partial<CarouselConfig> = {
  autoplay: 3000,
  breakpoints: {
    640: {
      itemsToShow: 1
    },
    768: {
      itemsToShow: 1.5
    },
    1024: {
      itemsToShow: 2
    }
  },
  gap: 25,
  wrapAround: true
}
</script>

<template>
  <section id="testimonials" class="bg-white px-4 lg:px-24 py-20">
    <SubtitleText text="Testimonials" />
    <div class="flex items-center justify-between">
      <h3 class="rubik text-4xl font-bold mt-5">
        Safe & Reliable Cargo Solutions
      </h3>
    </div>

    <Carousel v-bind="carouselConfig" class="mt-16">
      <Slide v-for="t in testimonials" :key="t.name">
        <div class="carousel__item px-10 py-8">
          <header class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-3 flex-wrap">
              <img :src="t.image" class="w-20 md:w-24 aspect-square rounded-full object-cover" />
              <div class="rubik">
                <p class="text-lg md:text-xl font-medium">{{ t.name }}</p>
                <p>{{ t.job }}</p>
              </div>
            </div>

            <div class="hidden w-16 aspect-square rounded-full bg-gradient-to-r from-accent to-amber-300 text-primary md:grid place-content-center">
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
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<style scoped>
.carousel__item:nth-of-type(1) {
  @apply bg-surface;
  .message {
    @apply text-slate-500
  }
}
.carousel__item:nth-of-type(2) {
  @apply bg-primary-500 text-white;
  .message {
    @apply text-white
  }
}
</style>