//================= 首頁相關route =================

//module
import express from 'express';

//middleware
const router = express.Router();

//導入控制器
import IndexController from '../controllers/index_controller.js';
const indexController = new IndexController();


//首頁route
router.get('/', indexController.indexPage);

//關於我們route
router.get('/about', indexController.aboutPage);

//配送資訊route
router.get('/deliver', indexController.deliverPage);

//FAQ常見問題route
router.get('/FAQ', indexController.FAQPage);



export default router;
