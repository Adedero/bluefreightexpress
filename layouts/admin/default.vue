<script setup lang="jsx">
const { user, clear } = useUserSession()

async function clearSession() {
  await clear()
  await navigateTo('/login')
}

</script>

<template>
  <div>
    <header class="h-[3.5rem] border-b px-4 py-2 flex items-center justify-between gap-2">
      <NuxtLink to="/admin" class="flex items-center gap-1">
        <Logo color="#6366f1" />
        <p class="font-rubik font-semibold text-3xl text-indigo-500">NPE</p>
      </NuxtLink>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <div class="hidden md:block text-xs text-right leading-[14px]">
            <p class="font-bold">{{ user.name }}</p>
            <p>{{ user.email }}</p>
          </div>
          <Icon name="lucide:user-circle" size="2rem" class="text-indigo-500" />
        </div>

        <PrimeButton @click="clearSession" label="Log out" size="small" icon="pi pi-sign-out" icon-pos="right" />
      </div>
    </header>

    <div class="h-[calc(100vh-3.5rem)] overflow-y-auto">
      <slot />
    </div>
  </div>
</template>