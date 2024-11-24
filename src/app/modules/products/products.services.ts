import { Bicycle } from "./products.interface";
import { bicycleModel } from "./products.model";


const createProductServiceInDB =async (payload:Bicycle)=>{
  const result = await bicycleModel.create(payload)
  return result;
 }
const getAllBicyclesFromDB =async ()=>{
  const result = await bicycleModel.find()
  return result;
 }
 const getASingleBicycleFromDB =async (id:string)=>{
 
  const result = await bicycleModel.findById(id)
  return result;
 }
 
 const updateBicleFromDb =async (payload:Bicycle,id:string)=>{
  const result = await bicycleModel.findOneAndUpdate({_id:id}, { $set: payload },{new:true})
  return result;
 }
 
 const deleteAsingleProductFromDb =async (id:string)=>{
 
  const result = await bicycleModel.deleteOne({_id:id})
  return result;
 }
 export const productService = {
 createProductServiceInDB,
 getAllBicyclesFromDB,
 getASingleBicycleFromDB,
 deleteAsingleProductFromDb,
 updateBicleFromDb
 }