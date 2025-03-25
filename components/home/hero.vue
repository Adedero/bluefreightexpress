<template>
  <section id="hero" class="w-screen h-screen relative flex flex-col pb-10 gap-16 px-4 lg:px-24">
    <div class="text-white mt-36 md:mt-auto flex flex-col gap-6">
      <SubtitleText text="Logistics & Supply Chain Solutions" dark />

      <h1 class="rubik text-4xl md:text-6xl font-bold text-white text-balance">
        Safest Logistics <br class="hidden md:inline"> Solutions Provider <br class="hidden md:inline"> With Integrity
      </h1>

      <p class="font-medium max-w-[36rem]">
        We're a leading provider of less-than-truckload freight transportation with the world-class network, technology and service our customers need at all the time.
      </p>

      <button class="bg-accent px-8 py-4 font-semibold w-fit text-primary-500 hover:bg-white transition-colors">
        Explore More
      </button>
    </div>

    <div>
      <PackageTracker />
    </div>

    <img src="~/assets/img/hero-img.jpg" class="w-full h-full object-cover absolute left-0 bottom-0 -z-10">
  </section>
</template>