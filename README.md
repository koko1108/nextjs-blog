
# Blog App Using Next JS 

這是一個基於 Next.js 架構的Blog App。

## 目錄

- [安裝與啟動](#安裝與啟動)
- [功能特點](#功能特點)
- [使用技術](#使用技術)
- [目錄結構](#目錄結構)
- [部署](#部署)

## 安裝與啟動

### 1. clone儲存庫

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. 安裝依賴

```bash
npm install
# or
yarn install
```

### 3. 啟動

```bash
npm run dev
# or
yarn dev

```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看應用。

## 功能特點

- 用戶註冊與登入
- 文章發布與管理
- 分類標籤
- 信箱訂閱
- 響應式設計

## 使用技術

- **Next.js** - React 框架，用於服務器端渲染和靜態網站生成
- **React** - 用於構建用戶界面
- **Tailwind CSS** - 用於快速開發的 CSS 框架
- **MongoDB** - NoSQL 資料庫，用於存儲數據
- **Vercel** - 部署和托管平台

## 目錄結構

```plaintext
├── /app                  # Next.js 應用的主要代碼
│   ├── /admin            # 管理員相關頁面
│   │   ├── /addProduct   # 添加文章頁面
│   │   ├── /blogList     # 文章列表頁面
│   │   └── /subscriptions# 訂閱資料頁面
│   ├── /api              # API 路由
│   │   ├── /blog         # blog API 路由
│   │   └── /email        # Email API 路由
│   └── /blogs/[id]       # 文章內頁頁面
├── /public         # 公共靜態資源
├── /Assets         # 靜態資源（圖片、圖標等）
├── /Components           # 共用的 React 組件
│   ├── /AdminComponents  # 管理員相關組件
│   ├── BlogItem.jsx      # blog項目組件
│   ├── BlogList.jsx      # blog列表組件
│   ├── Footer.jsx        # 頁腳組件
│   └── Header.jsx        # 頁頭組件
├── /lib            # 資料庫相關的代碼
└── README.md       # 說明文件
```

## 部署

### 使用 Vercel 部署

1. 登錄 [Vercel](https://vercel.com/) 帳號。
2. 點擊 `New Project`，選擇你的 GitHub 儲存庫。
3. 按照提示完成部署。

