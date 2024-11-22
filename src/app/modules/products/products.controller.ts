import { Request, Response } from "express";
import { productService } from "./products.services";

const createProduct = async (req: Request, res: Response) => {
  try {
   const payload = req.body.products;   
  //  const zodParsedData = BicleScema.parse(payload);
   const result = await productService.createProductServiceInDB(payload);
   
   res.status(200).json({
     success: true,
     message: 'Bicycle created successfully',
     data: result,
   });
   
  } catch (error:any) {
   res.status(405).json({
   status:false,
   message: error.message || 'Something went wrong',
   })
  }
 };
 
 export const productController = {
  createProduct,
 }