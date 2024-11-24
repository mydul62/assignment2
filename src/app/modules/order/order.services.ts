import { Order } from "./order.interface";
import { orderModel } from "./order.model";



const createOrderServiceInDB =async (payload:Order)=>{
  const newOrder = new orderModel(payload);
  const result = await newOrder.save();
  return result;
 }

 export const orderService = {
  createOrderServiceInDB,
  
 }