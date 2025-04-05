import mongoose from "mongoose"
import User from "~/server/models/user.model"

export default defineEventHandler(async (event) => {
  const users = await User.find().lean()
  return { users }
})