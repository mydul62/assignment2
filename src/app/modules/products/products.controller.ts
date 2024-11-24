import { Request, Response } from "express";
import { productService } from "./products.services";

const createBicycle = async (req: Request, res: Response) => {
  try {
   const payload = req.body;   
  //  const zodParsedData = BicleScema.parse(payload);
   const result = await productService.createProductServiceInDB(payload);
   
   res.status(200).json({
     success: true,
     message: 'Bicycle created successfully',
     data: result,
   });
   
  } catch (error) {
   res.status(405).json({
   status:false,
   message: error,
   })
  }
 };
 
const getAllBicycles = async (req: Request, res: Response) => {
  try {
   const result = await productService.getAllBicyclesFromDB();
   
   res.status(200).json({
     success: true,
     message: 'Bicycles retrieved successfully',
     data: result,
   });
   
  } catch (error) {
   res.status(405).json({
   status:false,
   message: error,
   })
  }
 };
const getASingleBicycle = async (req: Request, res: Response) => {
  try {
  const {productId}=req.params;
   const result = await productService.getASingleBicycleFromDB(productId);
   
   res.status(200).json({
     success: true,
     message: 'Bicycles retrieved successfully',
     data: result,
   });
   
  } catch (error) {
   res.status(405).json({
   status:false,
   message: error,
   error: error,
   })
  }
 };
const deleteASingeBicycle = async (req: Request, res: Response) => {
  try {
  const {productId}=req.params;
 
   const result = await productService.deleteAsingleProductFromDb(productId);
   res.status(200).json({
     message: 'Bicycles deleted  successfully',
     success: true,
     data: result,
   });
   
  } catch (error) {
   res.status(405).json({
   status:false,
   message: error,
   error: error,
   })
  }
 };
 
const updateBicycle = async (req: Request, res: Response) => {
  try {
  const {productId}=req.params;
  const payload = req.body;
 
   const result = await productService.updateBicleFromDb(payload,productId);
   res.status(200).json({
     message: 'Bicycles deleted  successfully',
     success: true,
     data: result,
   });
   
  } catch (error) {
   res.status(405).json({
   status:false,
   message: error,
   error: error,
   })
  }
 };
 
 export const productController = {
  createBicycle,
  getAllBicycles,
  getASingleBicycle,
  deleteASingeBicycle,
  updateBicycle
 }