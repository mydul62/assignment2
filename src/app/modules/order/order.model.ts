import mongoose, { model } from "mongoose";


const orderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true
  },
);

export const orderModel = model('Order', orderSchema);


