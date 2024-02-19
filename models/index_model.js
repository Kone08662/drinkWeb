//================= 首頁相關Models =================

//module
import sql from 'mssql';
import sqlConnect from './DBconfig.js';

export default class IndexModel {

    async getNewArrivalData() {
        try {
            
            const sqlQuery = `SELECT TOP 5 * FROM product ORDER BY id DESC;`;

            //連接資料庫
            await sqlConnect.connect();
            const sqlRequest = new sql.Request(sqlConnect);

            const result = await sqlRequest.query(sqlQuery);
            sqlConnect.close();

            return result.recordset;

        } catch (error) {

            console.error('IndexModel getNewArrivalData 查詢錯誤:', error);
            sqlConnect.close();
            throw error;
            
        }
    }
}
