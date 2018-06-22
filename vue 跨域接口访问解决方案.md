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
