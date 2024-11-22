import { Bicycle } from "./products.interface";
import { bicycleModel } from "./products.model";


const createProductServiceInDB =async (payload:Bicycle)=>{
  const result = await bicycleModel.create(payload)
  return result;
 }
 
 export const productService = {
 createProductServiceInDB,
 }