//================= 會員相關Models =================

//module
import sql from 'mssql';
import sqlConnect from './DBconfig.js';

export default class MembersModel {

    async getMemberData(email, password) {
        try {

            //使用參數化查詢
            const sqlQuery = `SELECT * FROM members WHERE email = @email AND password = @password;`;

            await sqlConnect.connect();
            const sqlRequest = new sql.Request(sqlConnect);

            //加入參數
            sqlRequest.input('email', sql.VarChar, email);
            sqlRequest.input('password', sql.VarChar, password);

            const result = await sqlRequest.query(sqlQuery);
            sqlConnect.close();
 
            return result.recordset;

        } catch (error) {

            console.error('LoginModel getMemberData 查詢錯誤:', error);
            sqlConnect.close();
            throw error;

        }
    }
}
