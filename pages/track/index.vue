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
        
      </div>

      <Affiliates />
    </NuxtLayout>
  </div> 
</template>