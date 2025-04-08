import { z } from 'zod'

export const LogInSchema = z.object({
  email: z.string({ message: 'Email is required' }).email({ message: 'Please, enter a valid email' }),
  password: z.string({ message: 'Password is required' }),
})
