# AutoRouter

A simple file-based router for Express, inspired by Next.js.

## Installation

```bash
npm install simple-author-router
```
#Usage
Create a pages directory in your project, with your route files:

```bash
my-app/
├── pages/
│   ├── index.js
│   ├── about.js
│   └── blog/
│       ├── [id].js
│       └── recent.js
```
Then, in your server.js or app.js:
```javascript
const { auto-router } = require('simple-author-router');

const app = auto-router({ pagesDir: 'pages' });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
The pages folder will be scanned automatically, and each file will be registered as a route based on its path.

# AutoRouter

一个简单的基于文件的 Express 路由器,灵感来自 Next.js。

## 安装

```bash
npm install simple-author-router
```

## 使用方法

在你的项目中创建一个 pages 目录,包含你的路由文件:

```bash
my-app/
├── pages/
│   ├── index.js
│   ├── about.js
│   └── blog/
│       ├── [id].js
│       └── recent.js
```

然后,在你的 server.js 或 app.js 中:

```javascript
const { init } = require('simple-author-router');

const app = init({ pagesDir: 'pages' });

app.listen(3000, () => {
  console.log('服务器正在 3000 端口运行');
});
```

pages 文件夹将被自动扫描,每个文件都会根据其路径被注册为一个路由。
