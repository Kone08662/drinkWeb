//================= 產品相關Controller =================

//model
import ProductsModel from '../models/products_model.js'; //產品相關Model

export default class ProductsController {

  async productsPage(req, res, next) {

    // 呼叫 model 進行資料庫操作
    const productsModel = new ProductsModel();

    try {

      const sqlData = await productsModel.getAllProductData(); // 執行資料庫查詢

      res.render('products', {

        title: '喝酒網-全部產品',
        secondTitle:'全部產品',
        productData: sqlData

      });

    } catch (error) {

      console.log('ProductsController.productsPage ERROR!');
      console.error(error);
      res.render('error'); //回應錯誤頁面
      next(error);

    }
  }

  async productsCategoryPage(req, res, next) {

    // 呼叫 model 進行資料庫操作
    const productsModel = new ProductsModel();

    try {

      const sqlData = await productsModel.getCategoryProductData(req.params.category); // 執行資料庫查詢

      res.render('products', {

        title: `喝酒網-${req.params.category}`,
        secondTitle:`${req.params.category}專區`,
        productData: sqlData

      });

    } catch (error) {

      console.log('ProductsController.productsPage ERROR!');
      console.error(error);
      res.render('error'); //回應錯誤頁面
      next(error);

    }
  }

  async productDetailPage(req, res, next) {//產品詳細頁

    // 呼叫 model 進行資料庫操作
    const productsModel = new ProductsModel();

    try {

      const sqlData = await productsModel.getOneProductData(req.params.id); // 執行資料庫查詢

      res.render('productDetail', {

        title: `喝酒網-${sqlData.product_name}`,
        productData: sqlData

      });

    } catch (error) {

      console.log('ProductsController.productsDetailPage ERROR!');
      console.error(error);
      res.render('error');//回應錯誤頁面
      next(error);

    }
  }
}
