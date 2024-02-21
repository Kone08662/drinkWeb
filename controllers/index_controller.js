//================= 首頁相關Controller =================

//model
import IndexModel from '../models/index_model.js';//首頁相關Model

export default class IndexController {

  async indexPage(req, res, next) {//首頁

    // 呼叫 model 進行資料庫操作
    const indexModel = new IndexModel();
    const sqlData = await indexModel.getNewArrivalData(); // 執行資料庫查詢

    try {

      res.render('index/index', {
        title: '喝酒網',
        newArrivalData: sqlData
      })

    } catch (error) {

      console.log('IndexController indexPage ERROR!');
      console.error(error);

      res.render('error');//回應錯誤頁面

      next(error);

    }

  }

  async aboutPage(req, res, next) {//關於我們

    try {

      res.render('index/about', {
        title: '喝酒網-關於我們',
      })

    } catch (error) {

      console.log('IndexController aboutUsPage ERROR!');
      console.error(error);

      res.render('error');//回應錯誤頁面

      next(error);

    }

  }

  async deliverPage(req, res, next) {//配送資訊

    try {

      res.render('index/deliver', {
        title: '喝酒網-配送資訊',
      })

    } catch (error) {

      console.log('IndexController deliverPage ERROR!');
      console.error(error);

      res.render('error');//回應錯誤頁面

      next(error);

    }

  }

  async FAQPage(req, res, next) {//FAQ常見問題

    try {

      res.render('index/FAQ', {
        title: '喝酒網',
      })

    } catch (error) {

      console.log('IndexController FAQPage ERROR!');
      console.error(error);

      res.render('error');//回應錯誤頁面

      next(error);

    }

  }

}
