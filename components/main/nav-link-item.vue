<script setup lang="ts">
import type { Link } from '~/data/site-links';

const { link, isLast } = defineProps<{ link: Link, isLast?: boolean }>()

const isHovering = ref<boolean>(false)

let closeTimeout: NodeJS.Timeout | null = null

const onMouseEnter = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
  }
  isHovering.value = true
}

const onMouseLeave = () => {
  closeTimeout = setTimeout(() => {
    isHovering.value = false
  }, 200)
}

const isOpen = ref<boolean>(false)

</script>

<template>
  <!-- Small screen -->
  <div class="md:hidden w-full">
    <div class="flex items-center justify-between gap-3 w-full">
      <NuxtLink :to="link.href" class="router-link-s font-semibold py-4 hover:text-accent flex-grow">
        {{ link.label }}
      </NuxtLink>

      <button @click="isOpen = !isOpen" v-if="link.items && link.items.length > 0" class="hover:bg-primary-400 h-full p-2 grid place-content-center">
        <Icon :name="isOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'" size="1.1rem" />
      </button>
    </div>
    <hr v-if="!isLast" class="opacity-30">
    <div
      v-if="link.items && link.items.length > 0"
      :class="[isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]', 'grid transition-all duration-300 ease-out w-full overflow-hidden']"
    >
      <div class="pl-8 pr-4 overflow-hidden grid">
        <NuxtLink v-for="item in link.items" :to="item.href" :key="item.label" class="font-semibold py-4 text-sm hover:text-accent flex-grow">
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Large Screen -->
   <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="hidden md:block relative">
    <NuxtLink :to="link.href" class="router-link w-full h-full text-white relative font-semibold flex items-center gap-1.5">
      <span>{{ link.label }}</span>
      <Icon v-if="link.items && link.items.length > 0" :name="isHovering ? 'lucide:chevron-up' : 'lucide:chevron-down'" size="1.1rem" />
    </NuxtLink>

    <div
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
      v-if="link.items && link.items.length > 0 && isHovering"
      class="absolute w-40 -bottom-[11.5rem] bg-white shadow p-4 rounded-md"
    >
      <div class="w-full h-full grid gap-4">
        <NuxtLink v-for="item in link.items" :to="item.href" :key="item.label" class="text-slate-500 hover:text-text-color hover:underline">
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
   </div>
</template>

<style scoped>
a.router-link-s.router-link-exact-active {
  color: var(--accent-color)
}

a.router-link {
  &::before {
    position: absolute;
    content: "";
    left: 50%;
    translate: -50%;
    bottom: -20px;
    height: 1.5px;
    width: 100%;
    background-color: white;
    opacity: 0;
    transition: opacity 0.2s ease-in
  }

  &:hover:before {
    opacity: 1;
  }
}

a.router-link.router-link-exact-active {
  &::before {
    opacity: 1;
  }
}
</style>