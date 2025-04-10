<script setup lang="ts">
import type { TOrder, TUser } from '~/definitions';
import random from 'random-string-generator';
import { deliveryModes, freightModes, orderStatuses, trackingUpdateSeverities } from '~/data';
import type { PickedLocation } from '~/components/location-picker.vue';

definePageMeta({
  layout: 'admin-default',
  middleware: ['auth'],
})

const route = useRoute()
const { id } = route.params

const toast = useToast()
const confirm = useConfirm()

const { data: order } = await useFetch<TOrder>(`/api/orders/${id.toString()}`)

if (!order.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Order not found',
    fatal: true
  })
}

const updatedOrder = ref<TOrder>(JSON.parse(JSON.stringify(order.value)))

watch(updatedOrder, () => {
  updatedOrder.value.totalPrice = updatedOrder.value.items.reduce((acc: number, item: Record<string, any>) => acc + (item.quantity * item.unitPrice), 0)
}, { deep: true })

const loading = ref<boolean>(false)

const updateOrder = async () => {
  loading.value = true
  try {
    const data = await $fetch(`/api/orders/${id.toString()}`, {
      method: 'PUT',
      body: updatedOrder.value
    })
    toast.add({
      severity: 'success',
      summary: 'Order updated',
      detail: 'The order has been successfully updated',
      life: 3000
    })
    
    updatedOrder.value ={
      // @ts-ignore
      ...data.order,
      user: updatedOrder.value.user
    }
    order.value = JSON.parse(JSON.stringify(updatedOrder.value))
  } catch (error) {
    useErrorToast(error, toast)
  } finally {
    loading.value = false
  }
}

//Delete 
const isDeleting = ref<boolean>(false)

const deleteOrder = async () => {
  isDeleting.value = true
  try {
    await $fetch(`/api/orders/${id.toString()}`, { method: 'DELETE' })
    toast.add({
      severity: 'success',
      summary: 'Order deleted',
      detail: 'The order has been successfully deleted',
      life: 3000
    })
    setTimeout(() => {
      navigateTo('/admin')
    }, 3000)
  } catch (err) {
    useErrorToast(err, toast)
  } finally {
    isDeleting.value = false
  }
}

const confirmDelete = () => {
  confirm.require({
    header: `Delete order ${order.value!.orderId}`,
    message: 'Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
        icon: 'pi pi-times-circle'
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger',
      icon: 'pi pi-trash'
    },
    accept: () => {
      deleteOrder()
    }
  })
}


const onLocationPicked = (obj: Record<string, any>, field: string, location: PickedLocation) => {
  obj[field] = {
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

//Edited fields
//User
const shouldDisableUserSaveBtn = computed(() => {
  //@ts-expect-error
  const hasChanged = updatedOrder.value.user.name.trim() !== order.value.user.name.trim() || updatedOrder.value.user.email.trim() !== order.value.user.email.trim()
  //@ts-expect-error
  return !hasChanged || !updatedOrder.value.user.name || !updatedOrder.value.user.email
})

const resetUser = () => {
  //@ts-expect-error
  updatedOrder.value.user = {...order.value.user}
}

//Items
const addNewItem = () => {
  updatedOrder.value.items.unshift({
    _id: random(),
    name: '',
    quantity: 1,
    unitPrice: 0
  })
}

const removeItem = (id: string) => {
  updatedOrder.value.items = updatedOrder.value.items.filter(item => item._id !== id)
}

const shouldDisableItemsSaveBtn = computed(() => {
  const hasChanged = JSON.stringify(updatedOrder.value.items) !== JSON.stringify(order.value!.items)
  return !hasChanged || !updatedOrder.value.items || updatedOrder.value.items.length === 0 || updatedOrder.value.items.some((item) => !item.name.trim() || !item.quantity || !item.unitPrice)
})

const resetItems = () => {
  updatedOrder.value.items = JSON.parse(JSON.stringify(order.value!.items))
}

///Delivery 
const shouldDisableDeliverySaveBtn = computed(() => {
  const hasChanged = updatedOrder.value.status !== order.value?.status || updatedOrder.value.freightMode !== order.value?.freightMode || updatedOrder.value.deliveryMode !== order.value?.deliveryMode || updatedOrder.value.estimatedDelivery !== order.value?.estimatedDelivery
  return !hasChanged || !updatedOrder.value.status || !updatedOrder.value.freightMode || !updatedOrder.value.deliveryMode || !updatedOrder.value.estimatedDelivery
})

const resetDelivery = () => {
  const fields = ['status', 'freightMode', 'deliveryMode', 'estimatedDelivery']
  //@ts-expect-error
  fields.forEach((field) => updatedOrder.value[field] = order.value![field])
}

//Destination
const shouldDisableDestinationSaveBtn = computed(() => {
  const requiredFields = ['address', 'city', 'state', 'country', 'countryCode', 'lat', 'lng'];
  
  const hasAllRequiredFields = requiredFields.every(field => 
    Boolean((updatedOrder.value.destination as Record<string, any>)[field])
  );
  
  const hasChanged = requiredFields.some(field => 
    (updatedOrder.value.destination as Record<string, any>)[field] !== (order.value?.destination as Record<string, any>)[field]
  );
  
  return !hasAllRequiredFields || !hasChanged;
});

const resetDestination = () => {
  updatedOrder.value.destination = JSON.parse(JSON.stringify(order.value!.destination))
}


//Tracking Updates
const addTrackingUpdate = () => {
  updatedOrder.value.trackingUpdates.unshift({
    _id: random(),
    status: updatedOrder.value.status,
    severity: 'info',
    comment: '',
    location: {
      name: '',
      address: '',
      city: '',
      state: '',
      country: '',
      countryCode: '',
      lat: null as unknown as number,
      lng: null as unknown as number
    },
    timestamp: new Date()
  })
}

const removeTrackingUpdate = (id: string) => {
  updatedOrder.value.trackingUpdates = updatedOrder.value.trackingUpdates.filter(update => update._id !== id)
}

const resetAllTrackingUpdates = () => {
  updatedOrder.value.trackingUpdates = JSON.parse(JSON.stringify(order.value!.trackingUpdates))
}

const resetTrackingUpdate = (id: string) => {
  updatedOrder.value.trackingUpdates = updatedOrder.value.trackingUpdates.map(update => update._id === id ? JSON.parse(JSON.stringify(order.value!.trackingUpdates.find(update => update._id === id))) : update)
}

const shouldDisableTrackingUpdateSaveBtn = computed(() => {

  const hasAllRequiredFields = updatedOrder.value.trackingUpdates.every(update =>
    Boolean(update.status) && Boolean(update.severity) &&
    Boolean(update.comment) && Boolean(update.timestamp) &&
    Boolean(update.location.address) && Boolean(update.location.city) && 
    Boolean(update.location.state) && Boolean(update.location.country) && 
    Boolean(update.location.lat) && Boolean(update.location.lng)
  );
  
  /* const hasChanged = updatedOrder.value.trackingUpdates.some(updatedUpdate =>
    JSON.stringify(updatedUpdate) !== JSON.stringify(order.value!.trackingUpdates.find(originalUpdate => 
      originalUpdate._id === updatedUpdate._id
    ))
  ); */

  const hasChanged = JSON.stringify(updatedOrder.value.trackingUpdates) !== JSON.stringify(order.value!.trackingUpdates)
  
  return !hasAllRequiredFields || !hasChanged;
});


//Copy tracking number
const isCopied = ref<boolean>(false)
const copyTrackingNumber = async () => {
  await navigator.clipboard.writeText(order.value!.trackingNumber)
  isCopied.value = true
  setTimeout(() => isCopied.value = false, 3000)
}
</script>

<template>
  <div class="w-dvw p-4 pb-10">
    <div v-if="order">
      <header class="border rounded-xl shadow-sm px-2 py-2 flex items-center justify-between gap-2">
        <h1 class="font-rubik text-xl font-bold text-[--p-primary-color]">
          Order ({{ order.status }}) {{ order.orderId }}
        </h1>

        <div class="flex items-center gap-2">
          <NuxtLink to="/admin">
            <PrimeButton label="Back" icon="pi pi-arrow-left" size="small" severity="secondary" />
          </NuxtLink>

          <PrimeButton
            :loading="isDeleting"
            icon="pi pi-trash"
            icon-pos="right"
            severity="danger"
            size="small"
            @click="confirmDelete()"
          />
        </div>
      </header>

      <div class="mt-4">
        <div class="flex items-center gap-2 flex-wrap">
          <p>Tracking Number: </p>
          <p class="font-semibold">{{ order.trackingNumber }}</p>
          <PrimeButton @click="copyTrackingNumber" :label="isCopied ? 'Copied' : 'Copy'" :icon="isCopied ? 'pi pi-check' : 'pi pi-copy'" size="small" severity="secondary" />
        </div>
      </div>

      <!-- Order body -->
      <div class="mt-4 font-rubik font-normal grid gap-8">
        <!-- User section -->
         <PrimeFieldset legend="1. Client Data" toggleable collapsed>
          <section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">

            <div class="grid md:grid-cols-2 gap-2">
              <div class="grid form-control">
                <label>Name</label>
                <PrimeInputText v-model="(updatedOrder.user as unknown as TUser).name" fluid />
              </div>

              <div class="grid form-control">
                <label>Email</label>
                <PrimeInputText v-model="(updatedOrder.user as unknown as TUser).email" fluid />
              </div>
            </div>

            <div class="flex justify-end gap-2">
              <PrimeButton
                @click="resetUser"
                label="Reset"
                icon="pi pi-replay"
                size="small"
                severity="secondary"
              />

              <PrimeButton
                @click="updateOrder"
                :loading
                :disabled="loading || shouldDisableUserSaveBtn"
                label="Save"
                icon="pi pi-save"
                size="small"
              />
            </div>
          </section>
         </PrimeFieldset>
        

        <!-- Items section -->
        <PrimeFieldset legend="2. Items" toggleable collapsed>
          <section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">
            <div>
              <PrimeButton
                @click="addNewItem"
                label="Add item"
                size="small"
                icon="pi pi-plus"
              />
            </div>
            <div v-for="item, index in updatedOrder.items" :key="item._id">
              <div class="border rounded-lg p-2">
                <div class="flex items-center justify-end">
                  <PrimeButton
                    @click="removeItem(item._id)"
                      severity="danger"
                      icon="pi pi-trash"
                      size="small"
                      :disabled="updatedOrder.items?.length === 1"
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

            <div class="flex items-center gap-2">
              <span>Total Price: </span>
              <span class="font-bold">${{ updatedOrder.totalPrice }}</span>
            </div>
            
            <div class="flex justify-end gap-2">
              <PrimeButton
                @click="resetItems"
                label="Reset"
                icon="pi pi-replay"
                size="small"
                severity="secondary"
              />

              <PrimeButton
                @click="updateOrder"
                :loading
                :disabled="loading || shouldDisableItemsSaveBtn"
                label="Save"
                icon="pi pi-save"
                size="small"
              />
            </div>
          </section>
        </PrimeFieldset>

        <!-- Delivery information -->
        <PrimeFieldset legend="3. Delivery Information" toggleable collapsed>
          <section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div class="grid form-control">
                <label>Order Status <span class="text-red-500">*</span></label>
                <PrimeSelect v-model="updatedOrder.status" :options="orderStatuses" />
              </div>

              <div class="grid form-control">
                <label>Freight Mode <span class="text-red-500">*</span></label>
                <PrimeSelect v-model="updatedOrder.freightMode" :options="freightModes" />
              </div>

              <div class="grid form-control">
                <label>Delivery Mode <span class="text-red-500">*</span></label>
                <PrimeSelect v-model="updatedOrder.deliveryMode" :options="deliveryModes" />
              </div>

              <div class="grid form-control">
                <label>Estimated Delivery Date <span class="text-red-500">*</span></label>
                <PrimeDatePicker v-model="updatedOrder.estimatedDelivery as Date" date-format="dd M, yy" fluid />
              </div>
            </div>

            <div class="flex justify-end gap-2">
              <PrimeButton
                @click="resetDelivery"
                label="Reset"
                icon="pi pi-replay"
                size="small"
                severity="secondary"
              />
              <PrimeButton
                @click="updateOrder"
                :loading
                :disabled="loading || shouldDisableDeliverySaveBtn"
                label="Save"
                icon="pi pi-save"
                size="small"
              />
            </div>
          </section>
        </PrimeFieldset>
        
        <!-- Destination -->
         <PrimeFieldset legend="4. Destination" toggleable collapsed>
          <section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">
            <div class="w-fit">
              <LocationPickerDialog @location-picked="(location: PickedLocation) => onLocationPicked(updatedOrder, 'destination', location)">
                <PrimeButton label="Search or click destination on map" outlined icon="pi pi-map" />
              </LocationPickerDialog>
            </div>

            <div class="grid md:grid-cols-12 gap-2">
              <div class="grid form-control md:col-span-12 lg:col-span-6">
                <label>Address <span class="text-red-500">*</span></label>
                <PrimeInputText v-model.trim="updatedOrder.destination!.address" fluid />
              </div>

              <div class="grid form-control md:col-span-6 lg:col-span-6">
                <label>Name <small>(optional)</small></label>
                <PrimeInputText v-model.trim="updatedOrder.destination!.name" placeholder="e.g. BFE Warehouse" fluid />
              </div>
              
              <div class="grid form-control md:col-span-6 lg:col-span-4">
                <label>City <span class="text-red-500">*</span></label>
                <PrimeInputText v-model.trim="updatedOrder.destination!.city" fluid />
              </div>

              <div class="grid form-control md:col-span-6 lg:col-span-4">
                <label>State or Region <span class="text-red-500">*</span></label>
                <PrimeInputText v-model.trim="updatedOrder.destination!.state" fluid />
              </div>

              <div class="grid form-control md:col-span-6 lg:col-span-4">
                <label>Country <span class="text-red-500">*</span></label>
                <PrimeInputText v-model.trim="updatedOrder.destination!.country" fluid />
              </div>

              <div class="grid form-control md:col-span-4 lg:col-span-4">
                <label>Country Code<span class="text-red-500">*</span></label>
                <PrimeInputText v-model.trim="updatedOrder.destination!.countryCode" fluid />
              </div>

              <div class="grid form-control md:col-span-4 lg:col-span-4">
                <label>Latitude<span class="text-red-500">*</span></label>
                <PrimeInputNumber v-model="updatedOrder.destination!.lat" :min="-90" :max="90" :grouping="false" fluid />
              </div>

              <div class="grid form-control md:col-span-4 lg:col-span-4">
                <label>Longitude<span class="text-red-500">*</span></label>
                <PrimeInputNumber v-model="updatedOrder.destination!.lng" :min="-180" :max="180" :grouping="false" fluid />
              </div>

              <div class="grid form-control md:col-span-12">
                <label>Description <small>(optional)</small></label>
                <PrimeTextarea v-model.trim="updatedOrder.destination!.description" rows="4" class="resize-none" fluid />
              </div>
            </div>

            <div class="flex justify-end gap-2">
              <PrimeButton
                @click="resetDestination"
                label="Reset"
                icon="pi pi-replay"
                size="small"
                severity="secondary"
              />
              <PrimeButton
                @click="updateOrder"
                :loading
                :disabled="loading || shouldDisableDestinationSaveBtn"
                label="Save"
                icon="pi pi-save"
                size="small"
              />
            </div>
          </section>
         </PrimeFieldset>

         <!-- Tracking Updates -->
         <PrimeFieldset legend="5. Tracking Updates" toggleable collapsed>
          <section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4">
            <div>
              <PrimeButton
                @click="addTrackingUpdate"
                label="Add Update"
                size="small"
                icon="pi pi-plus"
              />
            </div>

            <div v-for="item, index in updatedOrder.trackingUpdates" :key="item._id"  class="border rounded-lg p-2 grid gap-4">
              <div>
                <div class="flex items-center justify-between">
                  <p class="font-semibold">
                    {{ index + 1 }}. {{ useDateFormat(item.timestamp, 'DD MMM, YYYY hh:mm a') }}
                  </p>

                  <div class="flex items-center gap-2">
                    <PrimeButton
                      @click="resetTrackingUpdate(item._id)"
                      severity="secondary"
                      icon="pi pi-replay"
                      size="small"
                    />
                    <PrimeButton
                      @click="removeTrackingUpdate(item._id)"
                      severity="danger"
                      icon="pi pi-trash"
                      size="small"
                    />
                  </div>
                  
                </div>
                <div class="grid md:grid-cols-3 gap-2">
                  <div class="grid form-control">
                    <label>Status <span class="text-red-500">*</span></label>
                    <PrimeInputText v-model.trim="item.status" disabled fluid />
                  </div>

                  <div class="grid form-control">
                    <label>Severity <span class="text-red-500">*</span></label>
                    <PrimeSelect v-model="item.severity" :options="trackingUpdateSeverities" />
                  </div>

                  <div class="grid form-control">
                    <label>Timestamp <span class="text-red-500">*</span></label>
                    <PrimeDatePicker v-model="item.timestamp" showTime hourFormat="12" date-format="dd M, yy" fluid />
                  </div>
                </div>

                <div class="grid form-control md:col-span-3">
                  <label>Comment <span class="text-red-500">*</span></label>
                  <PrimeTextarea v-model.trim="item.comment" rows="3" class="resize-none" fluid />
                </div>
              </div>
              
              <p class="font-semibold">Location Data</p>

              <div class="w-fit">
                <LocationPickerDialog @location-picked="(location: PickedLocation) => onLocationPicked(item, 'location', location)">
                  <PrimeButton label="Search or click destination on map" outlined icon="pi pi-map" />
                </LocationPickerDialog>
              </div>

              <div class="grid md:grid-cols-12 gap-2">
                <div class="grid form-control md:col-span-12 lg:col-span-6">
                  <label>Address <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="item.location.address" fluid />
                </div>

                <div class="grid form-control md:col-span-6 lg:col-span-6">
                  <label>Name <small>(optional)</small></label>
                  <PrimeInputText v-model.trim="item.location.name" placeholder="e.g. BFE Warehouse" fluid />
                </div>
                
                <div class="grid form-control md:col-span-6 lg:col-span-4">
                  <label>City <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="item.location.city" fluid />
                </div>

                <div class="grid form-control md:col-span-6 lg:col-span-4">
                  <label>State or Region <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="item.location.state" fluid />
                </div>

                <div class="grid form-control md:col-span-6 lg:col-span-4">
                  <label>Country <span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="item.location.country" fluid />
                </div>

                <div class="grid form-control md:col-span-4 lg:col-span-4">
                  <label>Country Code<span class="text-red-500">*</span></label>
                  <PrimeInputText v-model.trim="item.location.countryCode" fluid />
                </div>

                <div class="grid form-control md:col-span-4 lg:col-span-4">
                  <label>Latitude<span class="text-red-500">*</span></label>
                  <PrimeInputNumber v-model="item.location.lat" :min="-90" :max="90" :grouping="false" fluid />
                </div>

                <div class="grid form-control md:col-span-4 lg:col-span-4">
                  <label>Longitude<span class="text-red-500">*</span></label>
                  <PrimeInputNumber v-model="item.location.lng" :min="-180" :max="180" :grouping="false" fluid />
                </div>
              </div>
            </div>

            <div class="flex justify-end gap-2">
              <PrimeButton
                @click="resetAllTrackingUpdates"
                label="Reset"
                icon="pi pi-replay"
                size="small"
                severity="secondary"
              />
              <PrimeButton
                @click="updateOrder"
                :loading
                :disabled="loading || shouldDisableTrackingUpdateSaveBtn"
                label="Save"
                icon="pi pi-save"
                size="small"
              />
            </div>
          </section>
        </PrimeFieldset>
      </div>
    </div>
  </div>
</template>