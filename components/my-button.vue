<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

interface Props {
  text?: string
  variant?: 'primary' | 'secondary'
  loading?: boolean
  disabled?: boolean
  type?: ButtonHTMLAttributes['type']
  icon?: string,
  iconPos?: 'left' | 'right'
}
const { 
  text,
  variant = 'primary',
  loading = false,
  disabled = false,
  type,
  icon,
  iconPos = 'right'
} = defineProps<Props>()

const buttonClass = computed(() => {
  if (variant === 'secondary') {
    return {
      main: 'bg-accent text-primary-500 disabled:bg-accent/80 disabled:text-white/90',
      before: 'before:bg-white/40'
    }
  }
  return {
    main: 'bg-primary-500 text-white disabled:bg-primary-300 disabled:text-white/80',
    before: 'before:bg-primary-400'
  }
})

</script>

<template>
  <button
    :class="['my-button', buttonClass.main, buttonClass.before, loading || disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
    :type
    :disabled="loading || disabled"
  >
    <slot>
      <div class="w-full h-full flex items-center gap-3" :class="{ 'flex-row-reverse' : iconPos === 'left' }">
        <span class="block">
          {{ text }}
        </span>

        <span v-if="icon || loading" class="grid place-content-center" :class="{ 'animate-spin': loading }">
          <Icon :name="loading ? 'lucide:loader-circle' : icon" size="1.2rem" />
        </span>
      </div>
    </slot>
  </button>
</template>

<style scoped>
.my-button {
  padding: 1rem 1.75rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  z-index: 10;
  transition: all 300ms ease-out;
}

.my-button:not(:disabled):before {
  position: absolute;
  content: "";
  z-index: -1;
  width: 250%;
  height: 250%;
  border-radius: 6rem;
  right: 0;
  bottom: 0;
  translate: 85% 70%;
  rotate: 3deg;
  transition: all 300ms ease-out
}

.my-button:hover:before {
  translate: 20% 0;
  rotate: 0deg;
}
</style>