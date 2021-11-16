# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 环境搭建
    对于 Vue 2，官方推荐用 Vue-cli 创建项目；而对于 Vue 3，建议你使用 Vite 创建项目，因为 vite 能够提供更好更快的调试体验。在使用 Vite 之前，我们要先安装 Node.js 。
    在正式开发之前，我推荐使用 VS Code 的官方扩展插件 Volar，这个插件给 Vue 3 提供了全面的开发支持。我们访问 Volar（https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar） 的地址，直接点击 Install，就会启动 VS Code 并且安装。然后使用 Chrome 访问 Vue 3 调试插件的地址（https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en） ，可以帮助我们在浏览器里高效的调试页面。

## 项目创建

    npm init @vitejs/app

## 安装依赖/项目启动

  npm install / npm run dev

## 目录结构
```
.
├── README.md
├── index.html           入口文件
├── package.json
├── public               静态资源文件
│   └── favicon.ico
├── src
│   ├── api            数据请求
│   ├── assets         静态资源
│   ├── components     组件
│   ├── pages          页面
│   ├── router         路由配置
│   ├── store          vuex数据
│   └── utils          工具函数
│   └── main.js        入口
└── vite.config.js     vite 工程化配置文件

```
