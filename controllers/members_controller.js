//================= 會員相關Controller =================

//model
import MembersModel from '../models/members_model.js';//會員相關Model

export default class membersController {

  async loginPage(req, res, next) {//會員登入畫面
    try {

      // 檢查是否已經登入
      if (req.session.email) {

        return res.render('members/members', {

          title: '喝酒網-會員專區',
          memberData: req.session

        });

      }
      
      //沒有紀錄
      res.render('members/loginPage', {

        title: '喝酒網-會員登入',

      });

    } catch (error) {

      console.log('membersController loginPage ERROR!');
      console.error(error);

      res.render('error');//回應錯誤頁面

      next(error);

    };

  };

  async login(req, res, next) {
    try {

      const { email, password } = req.body;

      // 呼叫 model 進行資料庫操作
      const membersModel = new MembersModel();
      const sqlData = await membersModel.getMemberData(email, password);

      if (sqlData && sqlData.length > 0) {//登入成功

        //記入session
        req.session.email = email;
        req.session.phone = sqlData[0].phone;
        req.session.address = sqlData[0].address;

        return res.render('members/members', {

          title: '喝酒網-會員專區',
          memberData: req.session

        });

      }

      // 登入失敗
      res.json({
        status: 'err',
        message: '帳號或密碼錯誤',
      });

    } catch (error) {

      console.log('membersController login ERROR!');
      console.error(error);

      res.render('error');//回應錯誤頁面

      next(error);

    }
  }



}
