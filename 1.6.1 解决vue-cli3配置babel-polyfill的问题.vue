# 1.6.1 解决vue-cli3配置babel-polyfill的问题


## install

```
  npm i babel-polyfill --save-dev
```

## 引入

```
有的说在main.js中，import 'babel-polyfill' 引入,测试后无效。

注意一下 node_module中 polyfill 的文件路径，有的可能是 import '@babel/polyfill' 这种情况。

在vue.config.js 中 configureWebpack 字段中，具体：

 chainWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
 }
 
 链式webpack配置函数

chainWebpack (config) {
  config.entry('main').add('babel-polyfill')
}

```


## 参考
- https://cli.vuejs.org/zh/guide/webpack.html
