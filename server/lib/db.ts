import mongoose from "mongoose"

export const createConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI
    if (!uri) {
      throw new Error('No MongoDB URI provided')
    }
    await mongoose.connect(uri)
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
  }
}

export const defineModel = (modelName: string, modelSchema: mongoose.Schema) => {
  if (mongoose.connection.readyState !== 1) {
    createConnection()
  }
  return mongoose.model(modelName, modelSchema)
}