<template>
  <div class="rubik w-screen h-screen">
    <div class="w-full h-full grid md:grid-cols-5 lg:grid-cols-2 md:p-2">
      <div class="hidden relative z-[1] rounded-md md:col-span-2 lg:col-span-1 overflow-hidden md:flex flex-col justify-between">
        <header class="flex items-center gap-4 justify-between text-white p-4">
          <Logo color="#fff" />

          <NuxtLink to="/" class="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-white/40 hover:bg-white/50 transition-colors rounded-full">
            <span>Back to website</span>
            <Icon name="lucide:arrow-right" />
          </NuxtLink>
        </header>

        <footer class="px-3 pt-1 pb-5 text-white">
          <h1 class="text-center rubik text-3xl">Admin Panel</h1>
          <p class="text-sm text-center">Made with Nuxt</p>
        </footer>
        
        <img src="~/assets/img/plane-2.jpg" class="absolute -z-[1] top-0 left-0 w-full h-full object-cover brightness-[0.7]" />
      </div>

      <div class="md:col-span-3 lg:col-span-1 flex items-center justify-center px-4 py-8">
        <slot />
      </div>
    </div>
  </div>
</template>