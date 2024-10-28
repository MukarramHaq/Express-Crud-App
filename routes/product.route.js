import express from 'express';
import { getProducts, getProductById, postProduct, updateProductById, deleteProductById } from '../controllers/product.controller.js';
const router = express.Router();


router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', postProduct);

router.put('/:id', updateProductById);

router.delete('/:id', deleteProductById);

export default router;