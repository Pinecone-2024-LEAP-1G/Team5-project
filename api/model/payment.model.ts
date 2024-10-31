import { model, Schema } from "mongoose";

type Payment = {
  id: string;
  orderName: string;
  paymentStatus: string;
  paymentType: string;
  userId: Schema.Types.ObjectId;
};
const PaymentSchema = new Schema({
  id: { type: String, required: true },
  orderNumber: { type: String, required: true },
  paymentStatus: { type: PaymentRequest },
  paymentType: { type: String },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

export const paymentModel = model<Payment>("Payment", PaymentSchema);
