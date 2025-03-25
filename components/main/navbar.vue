<script setup lang="ts">
import siteLinks from '~/data/site-links'

const nav = useTemplateRef('nav')
const smallNav = useTemplateRef('small-nav')

useNavbarFix(nav)

//Toggling nav on small screens
const isOpen = ref<boolean>(false)

onClickOutside(smallNav, (event) => {
  if (!isOpen) return
  const el = event.target as HTMLElement
  if (el.id === 'menu-btn' || el.classList.contains('i-lucide:menu')) return
  isOpen.value = false
})

const onWindowResize = () => {
  isOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
})
</script>

<template>
  <nav ref="nav" class="absolute z-50 top-0 left-0 w-dvw bg-primary-500/20 backdrop-blur-sm">
    <div class="relative md:px-4 lg:px-24 flex items-center justify-between">
      <div class="px-4 md:hidden">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center gap-10">
        <MainNavLinkItem v-for="link in siteLinks" :link :key="link.label" />
      </div>

      <button id="menu-btn" @click="isOpen = !isOpen" class="block md:hidden bg-white hover:bg-accent transition-colors h-16 px-6 font-semibold">
        <Icon name="lucide:menu" size="2rem" />
      </button>

      <NuxtLink to="/contact" class="hidden md:block ">
        <button class="bg-white hover:bg-accent transition-colors h-16 px-6 font-semibold">
          Request Quote
        </button>
      </NuxtLink>
    </div>

    <div :class="[isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]', 'grid transition-all duration-300 ease-out w-full bg-primary-500 text-white overflow-hidden']">
      <div ref="small-nav" class="overflow-hidden w-full">
        <div class="p-4">
          <MainNavLinkItem v-for="link, index in siteLinks" :link :key="link.label" :isLast="index === siteLinks.length - 1" />
        </div>
      </div>
    </div>
  </nav>
</template>