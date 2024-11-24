import express from 'express';
import { productController } from './products.controller';
const router = express.Router();


router.post('/products',productController.createProduct);
router.get('/products',productController.getAllBicycles);
router.get('/products/:productId',productController.getASingleBicycle);
router.delete('/products/:productId',productController.deleteASingeBicycle);
router.put('/products/:productId',productController.updateBicycle);

export const productRouters = router;