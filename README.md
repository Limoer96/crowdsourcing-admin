# 移动众包平台管理系统

> 基于Vue.js的管理系统

## 构建步骤

``` bash
# 安装依赖
npm install

# 启动开发服务器，默认8080端口，若被占用则会使用其他端口
npm run dev

# 构建
npm run build

```
## 目录说明

> 本项目使用Vue + Vuex + vue-router + axios为技术栈，使用了iview组件库

组件及页面位于：`src/components`
路由配置：`src/router`
vuex：`src/store` 其中子目录`modules`存储了4个子store，`types.js`配置了`mutation`的类型, `index.js`则是vuex的入口。
http请求：位于`src/api`, 其中每个文件对应了使用`axios`发起的请求

## 其它
1. 工程使用vue-cli构建。
2. 对于组件库，未使用按需加载。
3. 暂未使用token或者cookie(可和后端跟进)。
4. 如有任何问题，请讨论。

