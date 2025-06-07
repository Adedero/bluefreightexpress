<script setup lang="ts">
import { site } from '~/data';
import siteLinks from '~/data/site-links';
</script>

<template>
  <footer class="bg-primary-500 py-10 px-4 md:px-24">
    <div>
      <NuxtLink to="/" class="flex items-center gap-2">
        <Logo />
        <p class="rubik text-2xl md:text-4xl font-bold text-white">
          Next Port Express
        </p>
      </NuxtLink>
      <p class="mt-4 text-xs text-slate-300">
        To be the industry leader, globally recognized for effective & efficient solutions. To provide innovative
        solutions delivering quality, excellence and speed.
      </p>
    </div>

    <hr class="mt-10 mb-5 opacity-15">

    <div class="my-10 grid md:grid-cols-4 gap-10">
      <div>
        <div class="grid gap-5">
          <p class="text-white rubik text-lg">Location</p>
          <div class="h-[2px] w-10 bg-accent"></div>
        </div>

        <div class="mt-5 text-sm text-slate-300">
          <p>{{ site.address }}</p>
          <p>{{ site.city }}, {{ site.state }}, {{ site.countryAbbr }}</p>
          <p>Email 1: {{ site.emails[0] }}</p>
          <p>Email 2: {{ site.emails[1] }}</p>
        </div>
      </div>

      <div>
        <div class="grid gap-5">
          <p class="text-white rubik text-lg">Pages</p>
          <div class="h-[2px] w-10 bg-accent"></div>
        </div>

        <div class="mt-5 text-sm text-slate-300">
          <ul class="grid gap-1">
            <li v-for="link in siteLinks" :key="link.label">
              <NuxtLink :to="link.href" class="hover:underline">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="grid gap-5">
          <p class="text-white rubik text-lg">Our Services</p>
          <div class="h-[2px] w-10 bg-accent"></div>
        </div>

        <div class="mt-5 text-sm text-slate-300">
          <ul class="grid gap-1">
            <li v-for="link in siteLinks.find((l) => l.label.toLowerCase() === 'services')?.items ?? []"
              :key="link.label">
              <NuxtLink :to="link.href" class="hover:underline">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="grid gap-5">
          <p class="text-white rubik text-lg">Contact Us</p>
          <div class="h-[2px] w-10 bg-accent"></div>
        </div>

        <div class="mt-5 text-sm text-slate-300 grid gap-4">
          <p>For any inquiries, please contact us and we'll get back to you as soon as we can.</p>

          <NuxtLink to="/contact">
            <MyButton text="Contact Us" variant="secondary" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <hr class="my-5 opacity-15">

    <div class="text-center text-xs text-slate-300">
      &copy; Copyright 2012 - Next Port Express
    </div>
  </footer>
</template>