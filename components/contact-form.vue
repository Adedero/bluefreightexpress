<script setup lang="ts">
import { z, type SafeParseReturnType } from 'zod'

const form = useTemplateRef('contact-form')

interface Contact {
  name: string
  email: string
  phoneNumber: string
  country: string
  city: string
  subject: string
  message: string
}
const contact = ref<Partial<Contact>>({})

const Schema = z.object({
  name: z.string({ message: 'Full name is required '}),
  email: z.string({ message: 'Email is required' }).email({ message: 'Please, enter a valid email' }),
  phoneNumber: z.string({ message: 'Phone number is required' }).min(3, { message: 'Please, enter a valid phone number' }),
  country: z.string({ message: 'Country is required' }),
  city: z.string({ message: 'City is required' }),
  subject: z.string({ message: 'Subject is required' }),
  message: z.string({ message: 'Message is required' })
})

const validationResult = ref<SafeParseReturnType<Contact, Contact> | null>(null)
const submitForm = async () => {
  validationResult.value = await Schema.safeParseAsync(contact.value)
  if (!validationResult.value.success) {
    form.value?.scrollIntoView({ behavior: 'smooth' })
    return
  }
}
</script>

<template>
  <div ref="contact-form" class="grid md:grid-cols-2 gap-5">
    <div class="form-control">
      <label for="full-name">Full Name *</label>
      <input type="text" id="full-name" v-model="contact.name" placeholder="John Doe" class="my-input">
      <small v-if="validationResult?.error?.formErrors.fieldErrors.name" class="text-accent">
        {{ validationResult.error.formErrors.fieldErrors.name?.[0] }}
      </small>
    </div>

    <div class="form-control">
      <label for="phone-number">Phone Number *</label>
      <input type="text" id="phone-number" v-model="contact.phoneNumber" placeholder="+1234567890" class="my-input">
      <small v-if="validationResult?.error?.formErrors.fieldErrors.phoneNumber" class="text-accent">
        {{ validationResult.error.formErrors.fieldErrors.phoneNumber?.[0] }}
      </small>
    </div>

    <div class="form-control md:col-span-2">
      <label for="email">Email *</label>
      <input type="email" id="email" v-model="contact.email" placeholder="johndoe@example.com" class="my-input">
      <small v-if="validationResult?.error?.formErrors.fieldErrors.email" class="text-accent">
        {{ validationResult.error.formErrors.fieldErrors.email?.[0] }}
      </small>
    </div>

    <div class="form-control">
      <label for="country">Country *</label>
      <input type="text" id="country" v-model="contact.country" placeholder="e.g. USA" class="my-input">
      <small v-if="validationResult?.error?.formErrors.fieldErrors.country" class="text-accent">
        {{ validationResult.error.formErrors.fieldErrors.country?.[0] }}
      </small>
    </div>

    <div class="form-control">
      <label for="city">City *</label>
      <input type="text" id="city" v-model="contact.city" placeholder="e.g. New York" class="my-input">
      <small v-if="validationResult?.error?.formErrors.fieldErrors.city" class="text-accent">
        {{ validationResult.error.formErrors.fieldErrors.city?.[0] }}
      </small>
    </div>

    <div class="form-control md:col-span-2">
      <label for="subject">Subject *</label>
      <input type="text" id="subject" v-model="contact.subject" placeholder="e.g. Quote Request" class="my-input">
      <small v-if="validationResult?.error?.formErrors.fieldErrors.subject" class="text-accent">
        {{ validationResult.error.formErrors.fieldErrors.subject?.[0] }}
      </small>
    </div>

    <div class="form-control md:col-span-2">
      <label for="message">Message *</label>
      <textarea id="message" rows="6" v-model="contact.message" placeholder="Your message goes here" class="my-input"></textarea>
      <small v-if="validationResult?.error?.formErrors.fieldErrors.message" class="text-accent">
        {{ validationResult.error.formErrors.fieldErrors.message?.[0] }}
      </small>
    </div>

    <div class="flex items-center justify-center md:col-span-2 mt-4">
      <MyButton @click="submitForm" variant="secondary" text="Send Message" icon="lucide:send" />
    </div>
  </div>
</template>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>