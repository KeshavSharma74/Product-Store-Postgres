import { Router } from "express";
import { createProducts, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get('/get-all-products',getAllProducts);
productRouter.post('/create-product',createProducts);
productRouter.get('/get-product/:id',getProduct);
productRouter.put('/update-product/:id',updateProduct);
productRouter.delete('/delete-product/:id',deleteProduct);

export default productRouter;
