<script setup lang="ts">
useHead({
  title: 'Log In'
})
</script>

<template>
  <div>
    <NuxtLayout name="auth-default">
      <div>
        <div class="md:hidden fixed top-4 right-4">
          <NuxtLink to="/" class="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-primary-500/60 hover:bg-primary-500/70 transition-colors rounded-full text-white">
            <span>Back to website</span>
            <Icon name="lucide:arrow-right" />
          </NuxtLink>
        </div>

        <header>
          <h1 class="rubik font-bold text-4xl md:text-5xl">Log In</h1>
          <p class="text-sm mt-1">Log in with your admin credentials</p>
        </header>

        <div class="mt-10 w-[80vw] md:w-fit">
          <LoginForm />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>