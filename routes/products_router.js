//================= 產品相關route =================

//module
import express from 'express';

//middleware
const router = express.Router();

//導入控制器
import ProductsController from '../controllers/products_controller.js';
const productsController = new ProductsController();


//全部產品route
router.get('/', productsController.productsPage);

//產品特定類別route
router.get('/category/:category', productsController.productsCategoryPage);

//產品詳細route
router.get('/:id', productsController.productDetailPage);



export default router;
