import { bicycleModel } from "./products.model";


const createProductServiceInDB =async (payload)=>{
  const result = await bicycleModel.create(payload)
  return result;
 }
 
 export const productService = {
 createProductServiceInDB,
 }