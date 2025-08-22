import { Router } from "express";
import { createProducts, getAllProducts, getProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get('/get-all-products',getAllProducts);
productRouter.post('/create-product',createProducts);
productRouter.get('/get-product/:id',getProduct);

export default productRouter;
