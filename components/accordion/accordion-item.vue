<template>
  <div class="accordion-item">
    <button class="accordion-item__title" :disabled="disabled" @click="toggle">
      <slot name="title">{{ title }}</slot>
      <slot name="icon" :is-open="{ isOpen }">
        <Icon
          :name="isOpen ? expandIconLocal : collapseIconLocal"
          class="accordion-item__icon"
        />
      </slot>
    </button>
    <Transition name="accordion-item__description">
      <div v-if="isOpen" class="text-slate-500">
        <hr class="my-2" />
        <p>
          <slot name="description">{{ description }}</slot>
        </p>
      </div>
      <!-- <div v-if="isOpen">
        <slot name="description">{{ description }}</slot>
      </div> -->
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useAccordionItem } from '~/composables/use-accordion';

interface AccordionItemProps {
  title?: string;
  description?: string;
  expandIcon?: string;
  collapseIcon?: string;
  disabled?: boolean;
  name?: string;
}
const props = defineProps<AccordionItemProps>();
const emit = defineEmits(["toggle"]);
const name = props.name || self.crypto.randomUUID();
const { isOpen, toggle: baseToggle, accordionProps } = useAccordionItem(name);
const expandIconLocal = computed(
  () => accordionProps.value.expandIcon || props.expandIcon || "lucide:chevron-down",
);
const collapseIconLocal = computed(
  () => accordionProps.value.collapseIcon || props.collapseIcon || "lucide:chevron-up",
);
function toggle() {
  if (props.disabled) return;
  baseToggle!();
  emit("toggle", isOpen);
}
</script>

<style scoped>
@import url("./accordion.css");
</style>