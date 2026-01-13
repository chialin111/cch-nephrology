# 彰基腎臟科資源入口網 (CCH Nephrology Portal)

本專案為彰化基督教醫院腎臟科資源入口網的前端應用程式，使用 React + Vite 構建。

## 📁 專案結構說明

- `src/` - 原始碼目錄
  - `components/` - React 組件
  - `App.tsx` - 主應用入口
- `.github/workflows/` - GitHub Actions 自動化部署設定
- `vite.config.ts` - Vite 配置檔 (已設定 GitHub Pages base path)

## 🚀 快速開始

### 前置需求
請確保您的電腦已安裝 [Node.js](https://nodejs.org/) (建議 v18 或以上)。

### 安裝套件
在專案根目錄執行：
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```
啟動後，請瀏覽終端機顯示的網址 (通常為 http://localhost:3000)。

### 建置生產版本
```bash
npm run build
```
建置完成的檔案將位於 `dist/` 目錄。

## 📦 部署 (GitHub Pages)

本專案已設定 GitHub Actions workflow 自動部署至 GitHub Pages。

**設定步驟：**
1. 將程式碼推送到 GitHub repository 的 `main` 分支。
2. 進入 GitHub repository 的 **Settings** > **Pages**。
3. 在 **Build and deployment** > **Source** 選擇 **GitHub Actions**。
4. 之後每次推送到 `main` 分支，都會自動觸發部署流程。

## 📝 其他說明
- **.gitignore**: 已設定忽略 `node_modules`, `.env`, `dist` 等檔案。
- **環境變數**: 如需設定 API Key，請建立 `.env` 檔案 (參考 `.env.example` 或直接設定)。
- **TailwindCSS**: 未使用，目前使用 Vanilla CSS / 內建樣式。
