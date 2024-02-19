//================= 資料庫連接&設定 =================

//module
import sql from 'mssql';
import dotenv from 'dotenv';

//middleware
dotenv.config({ path: './process.env' }); // 載入環境變量設定

//資料庫相關設定
const config = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  options: {
    trustServerCertificate: true
  }
};

const sqlConnect = new sql.ConnectionPool(config);//建立連接池

// 處理資料庫連接錯誤
sqlConnect.on('error', (err) => {

  console.error('資料庫連接錯誤:', err);
  
});

export default sqlConnect;
