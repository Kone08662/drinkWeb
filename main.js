//================= module 相關 =================

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import engine from 'ejs-locals';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import flash from 'express-flash';


//================= middleware 相關 =================

const app = express();

// 載入環境變量設定
dotenv.config({ path: './process.env' });

// 設置 view 引擎
app.engine('ejs', engine);//使用ejs-locals | ejs沒有支援layout(); 等更新
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');

// req 日誌
app.use(logger('dev'));

// 解析 req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie-parser
app.use(cookieParser());

// 靜態檔案
app.use(express.static(path.join(process.cwd(), 'public')));

// session
app.use(session({
  secret: process.env.SESSION_SECRET,
  name: process.env.SESSION_NAME,
  resave: true,
  saveUninitialized: false, // not stored in store and cookie if not logged in yet
  // cookie: { maxAge: 600000 }
}))

// express-flash
app.use(flash());
app.use((req, res, next) => {
	//放在 res.locals 裡的資料，所有的 view 都可以存取。
  res.locals.messages = req.flash('messages')  // 設定 msg 訊息
  next();
});


//================= route 相關 =================

// route import
import indexRouter from './routes/index_route.js';// 首頁
import membersRouter from './routes/members_router.js';//會員
import productsRouter from './routes/products_router.js';//產品
import orderRouter from './routes/order_route.js';//訂單


//首頁相關route
app.use('/', indexRouter);

//會員相關route
app.use('/members', membersRouter);

//產品相關route
app.use('/products', productsRouter);

//訂單相關route
app.use('/order', orderRouter);


//================= error 處理 ==================

// 捕獲 404 錯誤並轉發到錯誤處理程序
app.use((req, res, next) => {
  next(createError(404));
});

// 錯誤處理程序
app.use((err, req, res, next) => {
  // 設置本地變數，僅在開發模式中提供錯誤訊息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);

  // 渲染錯誤頁面
  res.status(err.status || 500);
  res.render('error');
});


export default app;
