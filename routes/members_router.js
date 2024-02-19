//================= 會員相關route =================

//module
import express from 'express';

//middleware
const router = express.Router();

//導入控制器
import MembersController from '../controllers/members_controller.js';
const membersController = new MembersController();


//登入畫面route
router.get('/login', membersController.loginPage);

//登入route
router.post('/login', membersController.login);



export default router;
