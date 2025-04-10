<script setup lang="ts">
import { z, type SafeParseReturnType } from 'zod'
import { useMail } from '#imports'

const toast = useToast()
const mail = useMail()

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

const loading = ref<boolean>(false)

const submitForm = async () => {
  validationResult.value = await Schema.safeParseAsync(contact.value)
  if (!validationResult.value.success) {
    form.value?.scrollIntoView({ behavior: 'smooth' })
    return
  }
  const { data } = validationResult.value

  const html = `
  <p style="margin: 0 0 1rem 0">You have a new contact request from your website.</p>
  <p>Name: <span style="font-weight: 600">${data.name}</span></p>
  <p>Email: <span style="font-weight: 600">${data.email}</span></p>
  <p>Phone Number: <span style="font-weight: 600">${data.phoneNumber}</span></p>
  <p>Country: <span style="font-weight: 600">${data.country}</span></p>
  <p>City: <span style="font-weight: 600">${data.city}</span></p>
  <p>Subject: <span style="font-weight: 600">${data.subject}</span></p>
  <p>Message: <span style="font-weight: 600">${data.message}</span></p>
  `
  loading.value = true
  try {
    await mail({
      subject: 'Contact Request',
      html
    })
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Your message has been sent successfully',
      life: 3000
    })
    contact.value = {}
  } catch (error) {
    useErrorToast(error, toast)
  } finally {
    loading.value = false
  }
}

const handleCaptchaSubmit = (value: boolean) => {
  if (value) {
    submitForm()
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
      <Captcha @submit="handleCaptchaSubmit">
        <MyButton :loading variant="secondary" text="Send Message" icon="lucide:send" />
      </Captcha>
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