<script setup lang="ts">
definePageMeta({
  layout: 'admin-default',
  middleware: ['auth'],
})

const page = ref<number>(1)

const { data } = await useFetch('/api/orders', { query: { page: page.value } })
</script>

<template>
  <div class="w-dvw p-4">
    <header class="border rounded-lg shadow-sm px-4 py-2 flex items-center justify-between gap-2">
      <h1 class="font-rubik text-2xl font-bold text-[--p-primary-color]">Orders: 1</h1>
      
      <NuxtLink to="/admin/create-order">
        <PrimeButton label="New" icon="pi pi-plus" />
      </NuxtLink>
    </header>
    
    <div class="mt-4 bg-red-500">
      asaa
    </div>
  </div>
</template>