<script setup lang="ts">
import type { TOrder } from '~/definitions';

const { priority } = defineProps<{
  priority: TOrder['priority']
}>()
</script>

<template>
  <div class="w-full font-rubik font-normal">
    <div v-if="priority === 'high'">
      <div class="border border-red-300 bg-red-50 rounded-md px-4 py-2 text-[0.9rem] flex flex-col md:flex-row gap-3">
        <div class="text-red-400 flex items-center justify-center md:items-start">
          <Icon name="lucide:info" size="2.5rem" />
        </div>

        <section>
          <div class="leading-tight text-center md:text-left">
            <h4 class="text-lg font-bold text-red-400">Warning</h4>
            <p>This order has been marked as <span class="text-red-400 font-bold">{{ priority }} priority</span>!</p>
          </div>

          <div class="mt-4 md:mt-2">
            <div>
              <p class="font-semibold text-red-400">What does this mean?</p>
              <ul class="list-disc list-inside">
                <li>
                  The order contains highly sensitive and expensive documents which require more <span class="font-semibold">time</span> and <span class="font-semibold">resources</span> to transport.
                </li>

                <li>
                  High priority orders are <span class="font-semibold">5 times</span> more likely to have longer processing times at customs due to their sensitive nature.
                </li>

                <li>
                  You <span class="font-semibold">must</span> present a valid <span class="font-semibold">government-issued ID</span> upon collection of the order when it has been delivered.
                </li>

                <li>Your picture may be taken by our agent upon collection of the order for legal purposes and for documentation.</li>

                <li>You are strongly advised <span class="font-semibold">not</span> to share the <span class="font-semibold">tracking number</span> or <span class="font-semibold">order ID</span> of this order with anyone before it has been delivered and collected.</li>

                <li>For any more questions you have concerning this order, please contact the sender or reach out to us on our <NuxtLink to="/contact" class="font-semibold hover:underline text-blue-500">contact</NuxtLink> page, and add the order's tracking number or order ID to your message.</li>
              </ul>
            </div>
          </div>
        </section>
        
      </div>
    </div>


    <div v-if="priority === 'medium'">
      <div class="border border-amber-300 bg-amber-50 rounded-md px-4 py-2 text-[0.9rem] flex flex-col md:flex-row gap-3">
        <div class="text-amber-400 flex items-center justify-center md:items-start">
          <Icon name="lucide:info" size="2.5rem" />
        </div>

        <section>
          <div class="leading-tight text-center md:text-left">
            <h4 class="text-lg font-bold text-amber-400">Warning</h4>
            <p>This order has been marked as <span class="text-amber-400 font-bold">{{ priority }} priority</span>!</p>
          </div>

          <div class="mt-4 md:mt-2">
            <div>
              <p class="font-semibold text-amber-400">What does this mean?</p>
              <ul class="list-disc list-inside">
                <li>
                  The order contains sensitive and probabbly expensive documents which require more <span class="font-semibold">time</span> and <span class="font-semibold">resources</span> to transport.
                </li>

                <li>
                  Medium priority orders are <span class="font-semibold">2 times</span> more likely to have longer processing times at customs due to their sensitive nature.
                </li>

                <li>You are strongly advised <span class="font-semibold">not</span> to share the <span class="font-semibold">tracking number</span> or <span class="font-semibold">order ID</span> of this order with anyone before it has been delivered and collected.</li>

                <li>For any more questions you have concerning this order, please contact the sender or reach out to us on our <NuxtLink to="/contact" class="font-semibold hover:underline text-blue-500">contact</NuxtLink> page, and add the order's tracking number or order ID to your message.</li>
              </ul>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  </div>
</template>