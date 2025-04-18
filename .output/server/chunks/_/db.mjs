import mongoose from 'mongoose';

const createConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("No MongoDB URI provided");
    }
    await mongoose.connect(uri);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
const defineModel = (modelName, modelSchema) => {
  if (mongoose.connection.readyState !== 1) {
    createConnection();
  }
  return mongoose.model(modelName, modelSchema);
};

export { defineModel as d };
//# sourceMappingURL=db.mjs.map
