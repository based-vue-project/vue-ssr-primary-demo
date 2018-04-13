# vue-ssr-primary-demo

> 入门级vue-ssrdemo，参考文章<https://github.com/youngwind/blog/issues/112>

## 构建三步骤
1、写一个简单的客户端渲染 Demo（不包含 Ajax 数据）；
2、将客户端渲染改成服务端渲染（仍然不包含 Ajax 数据）；
3、在服务端端渲染的基础上，加上 Ajax 数据的处理；

## step1 客户端渲染demo
1、利用vue-cli安装vue项目
```
vue init webpack vue-ssr-primary-demo
cd vue-ssr-primary-demo
npm install
npm run dev
```
2、改造
App页面包含组件：Foo 和 Bar

## step2 服务端渲染
1、入口文件拆分
app.js 拆分为：client-entry.js客户端入口和server-entry.js服务端入口
server-entry.js 与 client-entry.js 这两个入口主要区别如下：
* client-entry.js 在浏览器端执行，所以需要指定 el 并且显式调用 $mount 方法，以启动浏览器的渲染。
* server-entry.js 在服务端被调用，因此需要导出为一个函数。
2、webpack打包配置拆分
现在有两个入口了，自然就需要两份 Webpack 配置文件：webpack.server.conf.js 和 webpack.client.conf.js，它们的公共部分抽象成 webpack.base.conf.js。
