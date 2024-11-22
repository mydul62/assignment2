import mongoose  from "mongoose";


const BicycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  type: { 
    type: String, 
    enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], 
    required: true 
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
});

export const bicycleModel = mongoose.model('Bicycle', BicycleSchema);


