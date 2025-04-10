<script setup lang="ts">
import random from 'random-string-generator';

const emit = defineEmits<{
  submit: [value: boolean]
}>()

const visible = ref<boolean>(false)
const randomStr = ref<string>()
const input = ref<string>()
const error = ref<string>()

const generateCaptcha = async () => {
  visible.value = true 
  error.value = ''
  input.value = ''
  randomStr.value = random(6, 'alphanumeric')
}

const submitCaptcha = () => {
  error.value = ''
  if (!input.value || input.value !== randomStr.value) {
    error.value = 'Invalid captcha.'
    emit('submit', false)
    return
  }
  emit('submit', true)
  visible.value = false
  onHide()
}

function onHide() {
  input.value = ''
  randomStr.value = ''
}
</script>

<template>
  <div>
    <div @click="generateCaptcha">
      <slot />
    </div>

    <PrimeDialog header="Captcha" v-model:visible="visible" @hide="onHide" class="font-rubik font-normal relative max-w-96">
      <div class="w-full h-full relative">
        <div>
          <h4 class="font-bold text-lg">Are you human?</h4>
          <p class="text-sm">Please enter the text in the image below</p>

          <div class="flex flex-col gap-2 items-center justify-center mt-4">
            <div class="relative bg-slate-200 text-slate-500 font-semibold" style="width: 150px; height: 70px;">
              <div ref="el" class="w-full h-full grid place-content-center text-lg select-none">
                {{ randomStr }}
              </div>
            </div>

            <PrimeButton @click="generateCaptcha" label="Refresh" icon="pi pi-replay" size="small" severity="secondary" />
          </div>
          
          <PrimeInputGroup class="w-full mt-4">
            <PrimeInputText v-model="input" size="small" />
            <PrimeButton @click="submitCaptcha" size="small" label="Submit" icon="pi pi-send" :disabled="!input" />
          </PrimeInputGroup>

          <div class="mt-2">
            <small v-if="error" class="text-red-500">
              {{ error }}
            </small>
          </div>
        </div>
      </div>
    </PrimeDialog>
  </div>
</template>