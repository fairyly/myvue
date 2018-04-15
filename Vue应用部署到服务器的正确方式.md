# Vue应用部署到服务器的正确方式

* https://segmentfault.com/a/1190000010191670

很多时候我们发现辛辛苦苦写的VueJs应用经过打包后在自己本地搭建的服务器上测试没有什么问题，但真正放在服务器上后，会发现或多或少的问题，  
比如：页面出现空白现象，获取资源路径不对等，我相信以VueJs为技术栈来进行前端开发的小伙伴或多或少都会遇到这样的问题，  
我也遇到过，那现在我们就来一一解决这样的问题。  

* 如何打包

基于Vue-Cli,通过npm run build来进行打包的操作

```
  修改 config --> index.js 中 的 assetsPublicPath: './', 如果不修改默认是项目目录,每次都要修改 index.html 中的引入路径
```

* 如何部署

将打包出来的资源，基于Vue-Cli的一般是dist目录下有static目录和index.html文件，可以直接将这两个文件扔到服务端

但有时候，我们会直接将dist文件扔到服务端

* 出现的问题
```
打包到服务器后，出现资源引用路径的问题

打包到服务器后，出现空白页的问题

打包到服务器后，出现引入的css的type被拦截转换为"text/plain"问题

打包到服务器后，出现路由刷新404的问题
```

* 出现资源引用路径的解决方案

一般这个问题是由于在webpack配置打包发布的目录造成的。
```
情况一.如果是将static与index.html直接放在服务器根目录,也就是说，当前的应用访问的网址如:http://www.xxx.com

解决办法：

    配置输出的publiPath:"/"或者"./"


情况二.直接将打包后的dist文件放在了服务器的根目录，也就是如果需要访问当前的应用，访问的网址如:http://www.xxx.com/dist

解决办法：

首先需要在创建路由实例中增加：
const router = new VueRouter({
mode: 'history',
base: '/mobile/',
scorllBehavior: () => ({

y: 0
}),
routes
});
然后再打包发布目录:
publiPath:"/dist/"或者"http://www.xxx.com/dist/"
```

* 出现由于路由的history模式下刷新当前路由出现404的问题

今天做的应用发布到服务器上，发现当刷新当前路由的时候，就会出现404的状况，其实这是  
因为当刷新当前页面时候，所需要访问的资源在服务器上找不到，也就是说，我们在VueJs开发应用的过程中，  
设置路由的路径不是真实存在的路径，并且使用了history模式。  

解决办法

需要后端进行配合,参考https://router.vuejs.org/en/essentials/history-mode.html


* 出现引入的css的type被拦截转换为"text/plain"问题

这是我开发过程中遇到的感觉很奇葩的问题，我们都知道，一般基于Vue-Cli，通过WebPack打包后的资源不需要更改什么。
可是我发现，当我把代码进行上传后，输入网址，看见的页面把我吓坏了，发现所有样式不存在了，
第一反应就是认为是自己在进行打包配置过程中出现了什么问题，然后通过fillder进行调试，发现css文件是正确获取到的


可以看到，这个css文件的type被拦截转换为"text/plain"，这时候，我又把相关的配置文件看了两遍，后面发现，真的是日了狗了，让我哭一会儿。
先上图

![tu](https://segmentfault.com/img/remote/1460000010191674)

我擦，原来是服务器端返回的类型居然是"text/plain"。这个问题很好解决，把这图直接给后端，是不是感觉被坑了/(ㄒoㄒ)/~~



### axios 请求 Uncaught (in promise) Error: Request failed with status code 404

```
issue: https://github.com/axios/axios/issues/893   说的不是 axios 问题,是服务器问题 可能跨域问题服务器未设置

1.有的说加 header: headers: {'content-type': 'application/x-www-form-urlencoded'},
2. 其实后来我发现不用这样去解决的，首先说明一下我这个项目有写假数据 通过Mock来写的 
   也正是应为这样才出现上面的问题 
   之后我在对接的说后把 
   // import Mock from './mock' 
   // Mock.bootstrap(); 
   注释掉了就行了就不再出现那个问题 
```



## axios post 传参数

```
params 要写到 data 里面

that.tableFloorData = [{}]
传数组时候 params= { arr: JSON.stringify(that.tableFloorData)}

axios({
    method: 'post',
    url: that.url+'/roles',
    data: params,
    headers: {"token": that.token,'content-type': 'application/x-www-form-urlencoded'},
})

get 传参数

axios({
    method: 'get',
    url: `${base}${url}`,
    data: {},
    params: params,
    headers: {'content-type': 'application/x-www-form-urlencoded'},// "token": token
  });
```
## 阻止时间冒泡

```
@click.stop = 
```


### element-ui正则表达式验证表单，后端验证表单。

```
mobile: [
    { validator: validateMobile, trigger: 'blur' },
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码' }
],
```


### 设置 favicon.ico

```
index.hrml 中增加  <link rel="shortcut icon" href="favicon.ico" />
favicon.ico 直接放和 src 同目录

打包的时候，放到打包后 index.html 同目录
设置 build 目录中 webpack.dev.conf.js 文件，如下：

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: './favicon.ico'
    }),
    new FriendlyErrorsPlugin()
  ]
})
```
