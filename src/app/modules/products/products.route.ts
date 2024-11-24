import express from 'express';
import { productController } from './products.controller';
const router = express.Router();


router.post('/',productController.createBicycle);
router.get('/',productController.getAllBicycles);
router.get('/:productId',productController.getASingleBicycle);
router.delete('/:productId',productController.deleteASingeBicycle);
router.put('/:productId',productController.updateBicycle);

export const productRouters = router;