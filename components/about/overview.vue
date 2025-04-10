<template>
  <div class="overview py-20 px-4 lg:px-24">
    <div class="w-full grid lg:grid-cols-2 gap-10">
      <div class="relative flex">
        <img src="~/assets/img/warehouse-workers-2.jpg" alt="plane" class="h-[30rem] w-full lg:h-[90%] lg:w-[90%] object-cover">

        <img src="~/assets/img/containers-1.png" class="absolute w-80 h-56 right-0 -bottom-0 object-cover border-t-[24px] border-l-[24px] border-white" />
      </div>

      <div class="grid gap-6">
        <SubtitleText text="Overview" />
        <h3 class="rubik text-4xl font-bold">Next Port Express In A Word</h3>
        <div class="text-slate-500">
          <p>
            Our global reach, deep industry knowledge, innovative technology, and extensive transportation network have allowed us to bring the latest learning to bear on our customers' unique challenges and desires. 
          </p>
        </div>

        <div>
          <div class="px-6 py-4 bg-accent text-primary-500 font-semibold text-lg w-fit">
            Our Approach
          </div>

          <p class="mt-6 text-slate-500">
            We leverage our scale to create innovative and tailored solutions that help our customers optimize their supply chains to stay ahead of their competition in a market that changes every single day.
          </p>
        </div>
        
        <div>
          <NuxtLink to="/services">
            <MyButton text="Learn More" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>