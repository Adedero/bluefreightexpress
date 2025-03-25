<template>
  <main>
    <MainHeader />
    <div class="relative">
      <MainNavbar />
      <slot></slot>
    </div>
    <ScrollTop />
    <MainFooter />
  </main>
</template>