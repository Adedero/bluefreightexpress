<script setup lang="ts">
import type { TOrder, TUser } from '~/definitions';
import random from 'random-string-generator';
import { deliveryModes, freightModes, orderStatuses } from '~/data';
import type { PickedLocation } from '~/components/location-picker.vue';

definePageMeta({
  layout: 'admin-default',
  middleware: ['auth'],
})

interface IOrder extends TOrder {
  client: TUser
}

const toast = useToast()

const order = reactive<Partial<IOrder>>({
  client: {
    name: '',
    email: '',
    role: 'USER'
  },
  items: [
    {
      _id: random(),
      name: '',
      quantity: 1,
      unitPrice: 0
    }
  ],
  deliveryMode: 'pickup station',
  freightMode: 'air',
  status: 'processing',
  destination: {
    address: '',
    name: '',
    city: '',
    state: '',
    country: '',
    countryCode: '',
    lat: null as unknown as number,
    lng: null as unknown as number,
    description: ''
  }
})

const addNewItem = () => {
  order.items!.unshift({
    _id: random(),
    name: '',
    quantity: 1,
    unitPrice: 0
  })
}

const removeItem = (id: string) => {
  order.items = order.items?.filter(item => item._id !== id)
}

const onLocationPicked = (location: PickedLocation) => {
  order.destination = {
    name: location.name,
    address: location.address,
    state: location.state,
    city: location.city,
    country: location.country,
    countryCode: location.countryCode.toUpperCase(),
    lat: location.lat,
    lng: location.lng
  }
}

const loading = ref<boolean>(false)

const createOrder = async () => {
  //Remove _ids from items
  order.items = order.items?.map(item => ({
    ...item,
    _id: undefined as unknown as string
  }))
  loading.value = true
  try {
    const data = await $fetch('/api/orders', {
      method: 'POST',
      body: order
    })
    await navigateTo(`/admin/orders/${(data.order as Record<string, any>)._id}`)
  } catch (error) {
    useErrorToast(error, toast)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-dvw px-0 py-4 md:p-4">
    <header class="border rounded-xl shadow-sm px-2 py-2 flex items-center justify-between gap-2">
      <h1 class="font-rubik text-xl font-bold text-[--p-primary-color]">
        New Order
      </h1>
      
      <NuxtLink to="/admin/">
        <PrimeButton label="Back" icon="pi pi-arrow-left" size="small" severity="secondary" />
      </NuxtLink>
    </header>
    
    <div class="mt-4 font-rubik font-normal">
      <PrimeStepper value="1" linear>
        <PrimeStepItem value="1">
          <PrimeStep>Client Data</PrimeStep>
          <PrimeStepPanel v-slot="{ activateCallback }"l>
            <div class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">
              <div class="grid md:grid-cols-2 gap-2">
                <div class="grid form-control">
                  <label for="name">Name <span class="text-red-500">*</span></label>
                  <PrimeInputText id="name" v-model.trim="order.client!.name" fluid />
                </div>

                <div class="grid form-control">
                  <label for="email">Email <span class="text-red-500">*</span></label>
                  <PrimeInputText id="email" v-model.trim="order.client!.email" fluid />
                </div>
              </div>

              <div class="flex items-center justify-end gap-2">
                <PrimeButton
                  :disabled="!order.client?.name || !order.client?.email"
                  @click="activateCallback('2')"
                  label="Next"
                  icon="pi pi-arrow-right"
                  icon-pos="right"
                />
              </div>
            </div>
          </PrimeStepPanel>
        </PrimeStepItem>

        <PrimeStepItem value="2">
          <PrimeStep>Items</PrimeStep>
          <PrimeStepPanel v-slot="{ activateCallback }">
            <div class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">
              <div>
                <PrimeButton
                  @click="addNewItem"
                  label="Add item"
                  size="small"
                  icon="pi pi-plus"
                />
              </div>
              <div v-for="item, index in order.items" :key="item._id">
                <div class="border rounded-lg p-2">
                  <div class="flex items-center justify-end">
                    <PrimeButton
                      @click="removeItem(item._id)"
                        severity="danger"
                        icon="pi pi-trash"
                        size="small"
                        :disabled="order.items?.length === 1"
                      />
                  </div>
                  <div class="grid md:grid-cols-3 gap-2">
                    <div class="grid form-control">
                      <label>Name <span class="text-red-500">*</span></label>
                      <PrimeInputText v-model.trim="item.name" :placeholder="`Item-${index + 1}`" fluid />
                    </div>

                    <div class="grid form-control">
                      <label>Quantity <span class="text-red-500">*</span></label>
                      <PrimeInputNumber :min="1" v-model="item.quantity" fluid />
                    </div>

                    <div class="grid form-control">
                      <label>Unit Price ($) <span class="text-red-500">*</span></label>
                      <PrimeInputNumber v-model="item.unitPrice" :max-fraction-digits="2" fluid />
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-end gap-2">
                <PrimeButton
                  @click="activateCallback('1')"
                  label="Prev"
                  icon="pi pi-arrow-left"
                  severity="secondary"
                />

                <PrimeButton
                  :disabled="!order.items?.length || order.items?.some((item) => !item.name || !item.quantity || !item.unitPrice)"
                  @click="activateCallback('3')"
                  label="Next"
                  icon="pi pi-arrow-right"
                  icon-pos="right"
                />
              </div>
            </div>
          </PrimeStepPanel>
        </PrimeStepItem>

        <PrimeStepItem value="3">
          <PrimeStep>Delivery Information</PrimeStep>
          <PrimeStepPanel v-slot="{ activateCallback }">
            <div class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">
              <div class="grid md:grid-cols-3 gap-2">
                <div class="grid form-control">
                  <label>Order Status <span class="text-red-500">*</span></label>
                  <PrimeSelect v-model="order.status" :options="orderStatuses" />
                </div>

                <div class="grid form-control">
                  <label>Freight Mode <span class="text-red-500">*</span></label>
                  <PrimeSelect v-model="order.freightMode" :options="freightModes" />
                </div>

                <div class="grid form-control">
                  <label>Delivery Mode <span class="text-red-500">*</span></label>
                  <PrimeSelect v-model="order.deliveryMode" :options="deliveryModes" />
                </div>
              </div>

              <div class="flex items-center justify-end gap-2">
                <PrimeButton
                  @click="activateCallback('2')"
                  label="Prev"
                  icon="pi pi-arrow-left"
                  severity="secondary"
                />

                <PrimeButton
                  @click="activateCallback('4')"
                  label="Next"
                  icon="pi pi-arrow-right"
                  icon-pos="right"
                  :disabled="!order.status || !order.deliveryMode || !order.freightMode"
                />
              </div>
            </div>
          </PrimeStepPanel>
        </PrimeStepItem>

        <PrimeStepItem value="4">
          <PrimeStep>Order Destination</PrimeStep>
          <PrimeStepPanel v-slot="{ activateCallback }">
            <div class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">
              <p class="font-semibold">Search for a location or select one by clicking anywhere on the map</p>

              <div>
                <LocationPicker @locationPicked="onLocationPicked" />
              </div>

              <div class="grid md:grid-cols-4 gap-2">
                <div class="grid form-control md:col-span-4 lg:hidden">
                  <label>Address <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="order.destination!.address" fluid />
                </div>

                <div class="grid form-control md:col-span-2">
                  <label>Name <small>(optional)</small></label>
                  <PrimeInputText v-model.trim="order.destination!.name" placeholder="e.g. BFE Warehouse" fluid />
                </div>

                <div class="form-control hidden lg:grid lg:col-span-2">
                  <label>Address <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="order.destination!.address" fluid />
                </div>
                
                <div class="grid form-control md:col-span-2 lg:col-span-1">
                  <label>City <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="order.destination!.city" fluid />
                </div>

                <div class="grid form-control md:col-span-2 lg:col-span-1">
                  <label>State or Region <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="order.destination!.state" fluid />
                </div>

                <div class="grid form-control md:col-span-2 lg:col-span-1">
                  <label>Country <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="order.destination!.country" fluid />
                </div>

                <div class="grid form-control md:col-span-2 lg:col-span-1">
                  <label>Country Code<span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="order.destination!.countryCode" fluid />
                </div>

                <div class="grid form-control md:col-span-2 lg:col-span-1">
                  <label>Latitude<span class="text-red-500">*</span></label>
                  <PrimeInputNumber v-model="order.destination!.lat" :min="-90" :max="90" :grouping="false" fluid />
                </div>

                <div class="grid form-control md:col-span-2 lg:col-span-1">
                  <label>Longitude<span class="text-red-500">*</span></label>
                  <PrimeInputNumber v-model="order.destination!.lng" :min="-180" :max="180" :grouping="false" fluid />
                </div>

                <div class="grid form-control md:col-span-2">
                  <label>Estimated Delivery Date <span class="text-red-500">*</span></label>
                  <PrimeDatePicker v-model="order.estimatedDelivery as Date" date-format="dd M, yy" fluid />
                </div>

                <div class="grid form-control md:col-span-4">
                  <label>Description <small>(optional)</small></label>
                  <PrimeTextarea v-model.trim="order.destination!.description" rows="4" class="resize-none" fluid />
                </div>
              </div>

              <div class="flex items-center justify-end gap-2">
                <PrimeButton
                  @click="activateCallback('2')"
                  label="Prev"
                  icon="pi pi-arrow-left"
                  severity="secondary"
                />

                <PrimeButton
                  @click="createOrder"
                  :loading
                  label="Submit"
                  icon="pi pi-check"
                  icon-pos="right"
                  :disabled="loading || !order.estimatedDelivery || !order.destination?.address || !order.destination?.city || !order.destination?.state || !order.destination?.country || !order.destination?.countryCode || order.destination?.lat === null || order.destination?.lat === undefined || order.destination?.lng === null || order.destination?.lng === undefined"
                />
              </div>
            </div>
          </PrimeStepPanel>
        </PrimeStepItem>
      </PrimeStepper>
    </div>
  </div>
</template>
