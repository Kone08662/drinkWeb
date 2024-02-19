#!/usr/bin/env node

/**
 * 模組。
 */

import app from '../main.js';
import debug from 'debug';
import http from 'http';


/**
 * 從環境中獲取端口並存儲在 Express 中。
 */

const port = normalizePort(process.env.PORT);

app.set('port', port);

/**
 * 建立 HTTP 伺服器。
 */

const server = http.createServer(app);

/**
 * 在提供的端口上監聽，支援所有網絡接口。
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * 正規化端口為數字、字符串或 false。
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // 命名管道
    return val;
  }

  if (port >= 0) {
    // 端口號
    return port;
  }

  return false;
}

/**
 * HTTP 伺服器 "error" 事件的事件監聽器。
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'port ' + port
    : 'port ' + port;

  // 使用友好的消息處理特定的監聽錯誤
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' 需要提升權限');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' 已被使用');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * HTTP 伺服器 "listening" 事件的事件監聽器。
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'port ' + addr
    : 'port ' + addr.port;
  console.log(`server on ${bind}`)
  debug('listening ' + bind);
}
