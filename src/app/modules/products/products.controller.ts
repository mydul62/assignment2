import { Request, Response } from "express";
import { productService } from "./products.services";

const createProduct = async (req: Request, res: Response) => {
  try {
   const payload = req.body;   
  //  const zodParsedData = studentZodSchema.parse(student)
   const result = await productService.createProductServiceInDB(payload);
   
   res.status(200).json({
     success: true,
     message: 'Student created successfully',
     data: result,
   });
   
  } catch (error) {
   console.log(error)
  }
 };
 
 export const productController = {
  createProduct,
 }