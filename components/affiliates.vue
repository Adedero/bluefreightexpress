<script setup lang="ts">
import affiliate_1 from '~/assets/img/affiliate-1.jpg'
import affiliate_2 from '~/assets/img/affiliate-2.jpg'
import affiliate_3 from '~/assets/img/affiliate-3.jpg'
import affiliate_4 from '~/assets/img/affiliate-4.jpg'
import affiliate_5 from '~/assets/img/affiliate-5.jpg'
import affiliate_6 from '~/assets/img/affiliate-6.jpg'

const affiliates = [
  affiliate_1,
  affiliate_2,
  affiliate_3,
  affiliate_4,
  affiliate_5,
  affiliate_6,
]
</script>

<template>
  <section class="px-4 md:px-24 pb-20">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4">
      <img v-for="affiliate in affiliates" :key="affiliate" :src="affiliate" class="block">
    </div>
  </section>
</template>