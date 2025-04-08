import { Model, Schema } from 'mongoose'
import { hash } from 'argon2'
import { defineModel } from '~/server/lib/db'

import type { TUser } from '~/definitions'

const UserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, select: false },
    role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' }
  },
  {
    timestamps: true  
  }
)

UserSchema.pre('save', async function(this, next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password as string)
  }
  next()
})

const User = defineModel('User', UserSchema)

export default User