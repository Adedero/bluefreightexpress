import { Schema } from 'mongoose';
import { hash } from 'argon2';
import { d as defineModel } from './db.mjs';

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, select: false },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" }
  },
  {
    timestamps: true
  }
);
UserSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password);
  }
  next();
});
const User = defineModel("User", UserSchema);

export { User as U };
//# sourceMappingURL=user.model.mjs.map
