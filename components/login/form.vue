<script setup lang="ts">
import { z } from 'zod'
import { LogInSchema } from '~/schema'

const route = useRoute()
const toast = useToast()

const credentials = ref<Partial<z.infer<typeof LogInSchema>>>({})
const showPassword = ref(false)

const result = ref<z.SafeParseReturnType<z.infer<typeof LogInSchema>, z.infer<typeof LogInSchema>>>()

const loading = ref<boolean>(false)

const { fetch: refreshSession } = useUserSession()

const logIn = async () => {
  result.value = await LogInSchema.safeParseAsync(credentials.value)
  if (!result.value.success) return

  loading.value = true
  try {
    await $fetch('/api/auth/login', { method: 'POST', body: credentials.value })

    await refreshSession()

    const { redirect } = route.query as { redirect: string }
    if (redirect) {
      await navigateTo(redirect)
      return
    }

    await navigateTo('/admin')
  } catch (error) {
    useErrorToast(error, toast)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="logIn" id="form" class="grid gap-5 w-full md:w-96">
    <div class="form-control">
      <label for="email">Email <span class="text-red-500">*</span></label>
      <input type="email" id="email" v-model="credentials.email" class="v-input" />
      <small v-if="result?.error?.formErrors.fieldErrors.email" class="text-red-500 font-semibold">
        {{ result.error.formErrors.fieldErrors.email?.[0] }}
      </small>
    </div>

    <div class="form-control">
      <label for="password">Password <span class="text-red-500">*</span></label>
      <div class="relative">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="credentials.password"
          class="v-input pr-10"
        />
        <button
          type="button"
          class="absolute top-1/2 right-3 -translate-y-1/2 text-slate-600 hover:text-primary-500 grid place-content-center"
          @click="showPassword = !showPassword"
        >
          <Icon :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'" size="1.2rem" />
        </button>
      </div>
      <small v-if="result?.error?.formErrors.fieldErrors.password" class="text-red-500 font-semibold">
        {{ result.error.formErrors.fieldErrors.password?.[0] }}
      </small>
    </div>

    <div class="mt-5">
      <MyButton
        :loading
        type="submit"
        text="Log In"
        :disabled="!credentials.email || !credentials.password"
        icon="lucide:log-in"
        class="w-full"
      />
    </div>
  </form>
</template>

<style scoped>
.form-control {
  display: grid;
  gap: 0.25rem;
}

.v-input {
  outline: none;
  border: 1px solid rgb(203 213 225);
  padding: 0.85rem 1rem;
  /* border-radius: 0.25rem; */
  transition: 200ms ease-out;
  width: 100%;
  padding-right: 2.5rem; /* space for icon */

  &:hover {
    border-color: var(--color-primary-500);
    box-shadow: 2px 2px 2px 1px rgb(203 213 225);
  }
}
</style>
