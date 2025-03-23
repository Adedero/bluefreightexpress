<template>
  <section id="faqs" class="pb-20 px-4 md:px-24">
    <div>
      <SubtitleText text="Frequently Asked Questions" />
      <h3 class="rubik text-4xl font-bold mt-5">
        FAQ
      </h3>
    </div>

    <div class="my-10 grid md:grid-cols-2 gap-x-6 gap-y-4">
      <div v-for="i in 4" class="border-l-[5px] border-l-accent border-y border-y-primary-500 border-r border-r-primary-500 px-4 py-2">
        <header class="rubik font-medium text-lg">Why are shipping rates so volatile</header>
        
        <div class="text-slate-500">
          <hr class="my-2" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus est, voluptas non sapiente nesciunt nulla enim quia nisi amet ex deserunt impedit maxime fugit consectetur dolorem adipisci aspernatur doloribus!
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <button class="bg-primary-500 px-8 py-4 font-semibold w-fit text-white hover:bg-accent hover:text-primary-500 transition-colors">
        Have More Questions?
      </button>
    </div>
  </section>
</template>