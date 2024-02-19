//================= 訂單相關route =================

//module
import express from 'express';

//middleware
const router = express.Router();

//導入控制器
import OrderController from '../controllers/order_controller.js';
const orderController = new OrderController();


//接收訂單route
router.post('/:id/:quantity', orderController.getOneOrder);



export default router;
