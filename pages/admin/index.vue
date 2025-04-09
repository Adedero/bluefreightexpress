<script setup lang="ts">
import type { DataTableRowClickEvent } from 'primevue'

definePageMeta({
  layout: 'admin-default',
  middleware: ['auth'],
})

const page = ref<number>(0)

const { data: count } = await useFetch<number>('/api/order/count')

const { data: orders } = await useFetch('/api/order', { query: { page: page.value }, watch: [page] })


const onRowClick = async (event: DataTableRowClickEvent) => {
  await navigateTo(`/admin/orders/${event.data._id}`)
}
</script>

<template>
  <div class="w-dvw p-4">
    <header class="border rounded-lg shadow-sm px-2 py-2 flex items-center justify-between gap-2">
      <h1 class="font-rubik text-xl font-bold text-[--p-primary-color]">
        Orders: {{ count === null ? 'Loading' : count }}
      </h1>
      
      <NuxtLink to="/admin/create-order">
        <PrimeButton label="New" icon="pi pi-plus" size="small" />
      </NuxtLink>
    </header>
    
    <div class="mt-4">
      <div v-if="orders === null">
        Loading
      </div>

      <div v-else>
        <div class="w-full overflow-x-auto">
          <PrimeDataTable
            :value="orders"
            striped-rows
            selectionMode="single"
            data-key="_id"
            @row-click="onRowClick"
            class="text-sm"
          >
            <PrimeColumn field="user.name" header="Client" />
            <PrimeColumn field="orderId" header="Order ID" />
            <PrimeColumn field="trackingNumber" header="Tracking Number" />
            <PrimeColumn field="status" header="Status">
              <template #body="{ data }">
                {{ toTitleCase(data.status) }}
              </template>
            </PrimeColumn>
            <PrimeColumn field="freightMode" header="Freight Mode">
              <template #body="{ data }">
                {{ toTitleCase(data.freightMode) }}
              </template>
            </PrimeColumn>
            <PrimeColumn header="Destination">
              <template #body="{ data }">
                {{ data.destination.state }}, {{ data.destination.country }}
              </template>
            </PrimeColumn>
            <PrimeColumn header="Est. Delivery">
              <template #body="{ data }">
                {{ useDateFormat(data.estimatedDelivery, 'DD MMM, YYYY') }}
              </template>
            </PrimeColumn>
            <PrimeColumn header="Created">
              <template #body="{ data }">
                {{ useDateFormat(data.createdAt, 'DD MMM, YYYY hh:mm a') }}
              </template>
            </PrimeColumn>
            <PrimeColumn header="Last Updated">
              <template #body="{ data }">
                {{ useDateFormat(data.updatedAt, 'DD MMM, YYYY hh:mm a') }}
              </template>
            </PrimeColumn>
          </PrimeDataTable>
          <PrimePaginator
            :rows="20"
            :total-records="count ?? orders.length"
            @page="(event) => page = event.page"
          />
        </div>
      </div>
    </div>
  </div>
</template>