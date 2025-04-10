<script setup lang="ts">
import Accordion from '~/components/accordion/accordion.vue'
import AccordionItem from '~/components/accordion/accordion-item.vue'
import { aboutPageFaqs } from '~/data/faq';
</script>

<template>
  <section id="faqs" class="py-20 px-4 md:px-24">
    <div>
      <SubtitleText text="Frequently Asked Questions" />
      <h3 class="rubik text-4xl font-bold mt-5">
        FAQ
      </h3>
    </div>

    <div class="my-10 grid md:grid-cols-2 gap-x-6 gap-y-4">
      <Accordion v-for="faqs in [aboutPageFaqs.slice(0, 3), aboutPageFaqs.slice(3)]">
        <AccordionItem v-for="faq in faqs" :name="faq.q" :title="faq.q" :description="faq.a" />
      </Accordion>
    </div>

    <div class="mt-20 flex items-center justify-center">
      <NuxtLink to="/contact">
        <MyButton text="Have More Questions?" />
      </NuxtLink>
    </div>
  </section>
</template>