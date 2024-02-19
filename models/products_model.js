//================= 產品相關Models =================

//module
import sql from 'mssql';
import sqlConnect from './DBconfig.js';

export default class productsModel {

    async getAllProductData() {//查詢全部產品
        try {

            const sqlQuery = `SELECT * FROM product;`;

            //連接資料庫
            await sqlConnect.connect();
            const sqlRequest = new sql.Request(sqlConnect);

            const result = await sqlRequest.query(sqlQuery);
            sqlConnect.close();

            return result.recordset;

        } catch (error) {

            console.error('productsModel getAllProductData 查詢錯誤:', error);
            sqlConnect.close();
            throw error;

        }
    }

    async getCategoryProductData(category) {//查詢特定類別產品
        try {

            //使用參數化查詢
            const sqlQuery = `SELECT * FROM product WHERE category = @category;`;

            //連接資料庫
            await sqlConnect.connect();
            const sqlRequest = new sql.Request(sqlConnect);

            //加入參數
            sqlRequest.input('category', sql.VarChar, category);

            const result = await sqlRequest.query(sqlQuery);
            sqlConnect.close();

            return result.recordset;

        } catch (error) {

            console.error('productsModel getAllProductData 查詢錯誤:', error);
            sqlConnect.close();
            throw error;

        }
    }

    async getOneProductData(id) {//查詢單獨產品
        try {

            //使用參數化查詢
            const sqlQuery = `SELECT * FROM product WHERE id = @id;`;

            //連接資料庫
            await sqlConnect.connect();
            const sqlRequest = new sql.Request(sqlConnect);

            //加入參數
            sqlRequest.input('id', sql.Int, id);

            const result = await sqlRequest.query(sqlQuery);
            sqlConnect.close();

            return result.recordset[0];

        } catch (error) {

            console.error('productsModel getOneProductData 查詢錯誤:', error);
            sqlConnect.close();
            throw error;

        }
    }
}
