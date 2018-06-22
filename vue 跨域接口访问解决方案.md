# 跨域接口访问解决方案

## 使用http-proxy-middleware 代理解决（项目使用vue-cli脚手架搭建）

例如请求的url:“http://f.apiplus.cn/bj11x5.json”

1、打开config/index.js,在proxyTable中添写如下代码：
```
proxyTable: { 
  '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
    target: 'http://f.apiplus.cn', //源地址 
    changeOrigin: true, //改变源 
    pathRewrite: { 
      '^/api': 'http://f.apiplus.cn' //路径重写 
      } 
  } 
}
```

使用axios请求数据时直接使用“/api”：
```
getData () { 
 axios.get('/api/bj11x5.json', function (res) { 
   console.log(res) 
 })
}
```

通过这中方法去解决跨域，打包部署时还按这种方法会出问题。解决方法如下：

```

let serverUrl = '/api/'  //本地调试时 
// let serverUrl = 'http://f.apiplus.cn/'  //打包部署上线时 
export default { 
  dataUrl: serverUrl + 'bj11x5.json' 
}

```

>调试时定义一个serverUrl来替换我们的“/api”，最后打包时，
只需要将“http://www.xxx.com”替换这个“/api”就可以了。


## 接口请求跨域问题

本地开发环境可以使用 proxytable 配置代理,

生产环境需要 ngix 代理,本地写统一请求的方法

axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决。 这个时候需要注意需要后端配合设置：
```
axios.defaults.withCredentials = true ;
```

header信息 Access-Control-Allow-Credentials:true
Access-Control-Allow-Origin不可以为 '*'，因为 '*' 会和 Access-Control-Allow-Credentials:true 冲突，需配置指定的地址

java 设置 :
```
response.setHeader("Access-Control-Allow-Origin", "指定地址"); 
response.setHeader("Access-Control-Allow-Methods", "*"); 
response.setHeader("Access-Control-Allow-Credentials", true); 
response.setHeader("Access-Control-Max-Age", "3600"); //设置过期时间 
response.setHeader("Access-Control-Allow-Headers", "*"); 
response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // 支持HTTP 1.1. 
response.setHeader("Pragma", "no-cache"); // 支持HTTP 1.0. response.setHeader("Expires", "0"); 
```
