<script setup lang="ts">
import orgData from '~/data/org';

</script>

<template>
  <div>
    <NuxtLayout name="main-default">
      <section class="w-screen h-[36rem] relative flex items-center gap-16 px-4 lg:px-24">
        <div class="text-white flex flex-col gap-6">
          <SubtitleText text="Reach Out To Us" dark />

          <h1 class="rubik text-4xl md:text-6xl font-bold text-white text-balance">
            Contact Us
          </h1>

          <p class="font-medium max-w-[36rem]">
            Get in touch with us and we'll respond as soon as we can. We typically reply within the hour.
          </p>
        </div>

        <div class="w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/50 to-transparent" />
        <img src="~/assets/img/contact-us.jpg" class="w-full h-full object-cover object-top absolute left-0 bottom-0 -z-10">
      </section>
      
      <div class="py-20 px-4 lg:px-24 flex items-center justify-center">
        <div class="max-w-[54rem] bg-primary-500 text-white py-12 px-6 md:py-16 md:px-24 flex flex-col gap-5 items-center justify-center">
          <SubtitleText text="Contact Form" dark />
          <h4 class="rubik font-semibold text-3xl md:text-4xl">
            Get In Touch With Us
          </h4>
          <p>
            We appreciate your interest please complete the form below and we will contact you to discuss your warehousing, distribution, air, ocean freight or any other logistics needs.
          </p>

          <div class="w-full grid md:grid-cols-2 gap-12">
            <div class="flex flex-col items-center justify-center gap-1">
              <div class="aspect-square p-6 rounded-full bg-primary-400 grid place-content-center">
                <Icon name="lucide:mail" size="1.75rem" />
              </div>
              <p class="text-sm font-medium text-center">
                {{ orgData.email }}
              </p>
            </div>
            
            <div class="flex flex-col items-center justify-center gap-1">
              <div class="aspect-square p-6 rounded-full bg-primary-400 grid place-content-center">
                <Icon name="lucide:clock" size="1.75rem" />
              </div>
              <p class="text-sm font-medium text-center whitespace-pre-wrap">
                {{ orgData.openHours }}
              </p>
            </div>
          </div>

          <div class="mt-10 w-full">
            <ContactForm />
          </div>
        </div>
      </div>

      <Affiliates />
    </NuxtLayout>
  </div>
</template>