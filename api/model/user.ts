import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  userName: { type: String },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  phoneNumber: { type: String, min: 8 },
  password: { type: String, min: 8 },
  adress: { type: String },
  zipCode: { type: Number },
  cartId: { type: String },
  role: { type: String },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
