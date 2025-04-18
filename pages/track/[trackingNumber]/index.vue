<script setup lang="ts">
import type { TOrder, TUser } from '~/definitions';

const { trackingNumber } = useRoute().params

useHead({
  title: trackingNumber?.toString() || 'Tracking'
})

const { data: order } = await useFetch<TOrder>(`/api/orders/track/${trackingNumber}`)

const computedTrackingUpdates = computed(() => {
  if (!order.value) return []
  return order.value.trackingUpdates.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })
})
</script>

<template>
  <div>
    <NuxtLayout name="main-default">
      <div v-if="order">
        <div class="pt-20 pb-8 px-4 lg:px-8 bg-surface">
          <div class="flex items-center gap-1 text-primary-500">
            <Icon name="lucide:package-search" size="1.6rem" />
            <h4 class="rubik text-3xl font-bold">Shipment Tracking</h4>
          </div>

          <div v-if="order.priority !== 'low'" class="mt-5">
            <OrderPriorityMessage :priority="order.priority" />
          </div>
          
          <div class="mt-10 grid items-start gap-x-2 gap-y-4 lg:grid-cols-2">
            <div class="grid gap-1">
              <div class="flex gap-1 items-center">
                <div class="w-1.5 aspect-square bg-slate-500 rounded-full"></div>
                <span class="text-slate-500">Shipping Date: </span>
                <span class="font-semibold rubik">{{ useDateFormat(order.createdAt, 'MMM DD, YYYY') }}</span>
              </div>

              <div class="flex gap-1 items-center">
                <div class="w-1.5 aspect-square bg-slate-500 rounded-full"></div>
                <span class="text-slate-500">Tracking Number: </span>
                <span class="font-semibold rubik">{{ order.trackingNumber }}</span>
              </div>

              <div class="flex gap-1 items-center">
                <div class="w-1.5 aspect-square bg-slate-500 rounded-full"></div>
                <span class="text-slate-500">Order ID: </span>
                <span class="font-semibold rubik">{{ order.orderId }}</span>
              </div>

              <div class="flex gap-1 items-center">
                <div class="w-1.5 aspect-square bg-slate-500 rounded-full"></div>
                <span class="text-slate-500">Delivery Address: </span>
                <span class="font-semibold rubik">{{ order.destination.address }}</span>
              </div>

              <div class="flex gap-1 items-center">
                <div class="w-1.5 aspect-square bg-slate-500 rounded-full"></div>
                <span class="text-slate-500">Priority: </span>
                <span class="font-semibold rubik">{{ order.priority }}</span>
              </div>
            </div>
            
            <div>
              <OrderStatusIndicator :status="order.status" :freight-mode="order.freightMode" class="w-full" />

              <PrimePanel header="More" toggleable collapsed class="rounded-md mt-1 font-rubik font-normal">
                <PrimeFieldset>
                  <template #legend>
                    <div class="flex items-center gap-1">
                      <Icon name="lucide:circle-user-round" size="1.2rem" />
                      <span class="font-bold">Client</span>
                    </div>
                  </template>

                  <div class="text-xs md:text-sm">
                    <div>
                      <span>Name: </span> <span class="font-semibold">{{ (order.user as TUser).name }}</span>
                    </div>
                    <PrimeDivider class="my-2" />
                    <div>
                      <span>Email: </span> <span class="font-semibold">{{ (order.user as TUser).email }}</span>
                    </div>
                  </div>
                </PrimeFieldset>

                <PrimeFieldset>
                  <template #legend>
                    <div class="flex items-center gap-1">
                      <Icon name="lucide:package" size="1.2rem" />
                      <span class="font-bold">Items</span>
                    </div>
                  </template>

                  <div class="overflow-x-auto">
                    <PrimeDataTable :value="order.items" size="small" class="text-xs md:text-sm" striped-rows>
                      <PrimeColumn field="name" header="Name" />
                      <PrimeColumn field="unitPrice" header="Price ($)" />
                      <PrimeColumn field="quantity" header="Quantity" />
                      <PrimeColumn header="Amount ($)">
                        <template #body="{ data }">
                          {{ (data.unitPrice * data.quantity).toLocaleString() }}
                        </template>
                      </PrimeColumn>
                    </PrimeDataTable>
                  </div>

                  <div class="mt-2">
                    <div class="flex items-center gap-2 text-xs md:text-sm pl-2">
                      <span>Total:</span>
                      <span class="font-bold">${{ order.totalPrice.toLocaleString() }}</span>
                    </div>
                  </div>
                </PrimeFieldset>
              </PrimePanel>
            </div>
          </div>
        </div>

        <div class="bg-white pb-20 lg:py-10 lg:px-8 grid gap-x-2 gap-y-10 lg:grid-cols-5 items-start">
          <div v-if="computedTrackingUpdates.length > 0" class="bg-surface lg:bg-white lg:rounded-md lg:col-span-2 px-3 py-4 lg:p-0 grid gap-3">
            <TrackerUpdateItem v-for="item in computedTrackingUpdates" :update="item" :freight-mode="order.freightMode" :key="item._id" />
          </div>

          <div :class="['px-3', computedTrackingUpdates.length > 0 ? 'lg:col-span-3' : 'lg:col-span-5']">
            <header class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
              <div class="border rounded-md bg-white p-2 flex flex-col">
                <div class="flex items-center gap-2">
                  <div class="bg-blue-100 text-blue-500 p-2 aspect-square rounded-full grid place-content-center">
                    <Icon name="lucide:map-pin-check" />
                  </div>
                  <p class="rubik font-medium text-slate-600 text-sm">Destination</p>
                </div>
                <div class="mt-2 rubik flex flex-col justify-between flex-grow">
                  <p class="font-medium">
                    <span class="text-3xl">{{ order.destination.city }}</span>
                  </p>
                  <p class="text-right text-xs text-slate-500">
                    {{ order.destination.state }}, {{ order.destination.country }}
                  </p>
                </div>
              </div>

              <div class="border rounded-md bg-white p-2 flex flex-col">
                <div class="flex items-center gap-2">
                  <div class="bg-amber-100 text-amber-500 p-2 aspect-square rounded-full grid place-content-center">
                    <Icon name="lucide:calendar-arrow-down" />
                  </div>
                  <p class="rubik font-medium text-slate-600 text-sm">Est. Arrival Date</p>
                </div>
                <div class="mt-2 rubik flex flex-col justify-between flex-grow">
                  <p class="font-medium">
                    <span class="text-3xl">{{ useDateFormat(order.estimatedDelivery, 'MMM DD') }}</span>
                  </p>
                  <p class="text-right text-xs text-slate-500">{{ useDateFormat(order.estimatedDelivery, 'dddd | YYYY') }}</p>
                </div>
              </div>

              <div class="border rounded-md bg-white p-2 flex flex-col">
                <div class="flex items-center gap-2">
                  <div class="bg-emerald-100 text-emerald-500 p-2 aspect-square rounded-full grid place-content-center">
                    <Icon name="lucide:circle-dollar-sign" />
                  </div>
                  <p class="rubik font-medium text-slate-600 text-sm">Total Value</p>
                </div>

                <div class="mt-2 rubik flex flex-col justify-between flex-grow">
                  <p class="font-medium">
                    <span>$</span>
                    <span class="text-3xl break-words">{{ Math.floor(order.totalPrice).toLocaleString() }}</span>
                    <span>.{{ (order.totalPrice % 1).toFixed(2).slice(2) }}</span>
                  </p>
                  <p class="text-right text-xs text-slate-500">No updates</p>
                </div>
              </div>
            </header>

            <div class="mt-5 border rounded-md overflow-hidden">
              <div v-if="computedTrackingUpdates.length > 0">
                <TrackerMap :updates="computedTrackingUpdates" />
              </div>

              <div v-else>
                <div class="p-4 grid place-content-center gap-4">
                  <div class="flex flex-col items-center justify-center text-slate-400">
                    <Icon name="lucide:package-open" size="6rem" />
                    <p class="font-rubik font-semibold text-slate-400 text-2xl">No updates</p>
                  </div>

                  <p class="text-center text-slate-500">Your order is still being processed. <br/> Check back later for updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="pt-20 pb-8 px-4 lg:px-8 bg-surface">
          <div class="flex items-center gap-1 text-primary-500">
            <Icon name="lucide:package-search" size="1.6rem" />
            <h4 class="rubik text-3xl font-bold">Shipment Tracking</h4>
          </div>
          <div class="mt-3 flex items-center justify-between gap-x-4 flex-wrap">
            <p class="flex gap-2 items-center">
              <span>Tracking Number: </span>
              <span class="font-semibold text-lg rubik">{{ trackingNumber }}</span>
            </p>

            <p class="flex gap-2 items-center">
              <span>Status: </span>
              <span class="font-semibold text-lg rubik">Not Found</span>
            </p>
          </div>
        </div>
        <div>
          <PackageTracker />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>