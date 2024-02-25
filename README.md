# Drink Web

## 安裝步驟

在專案目錄下執行以下命令，安裝所有相關套件：

```bash
npm install
```

## 啟動伺服器
執行以下命令以啟動伺服器：

```bash
npm start
```

## 資料庫
`fakeData.sql` 包含了一些假資料和資料結構，這是使用 MS SQL Server 2022 的版本。

## 設定 process.env
在 .env 文件中設定以下環境變數：

```env
# 資料庫
DB_SERVER=
DB_USER=
DB_PASSWORD=
DB_DATABASE=

# Session
SESSION_SECRET=
SESSION_NAME=

# Port
PORT=
```
