# 解密Vue SSR

* https://juejin.im/entry/5ad855c56fb9a045fc665bd7


### Vue2与服务端渲染（SSR）
Vue2.0在服务端创建了虚拟DOM，因此可以在服务端可以提前渲染出来，解决了单页面一直存在的问题：SEO和初次加载耗时较多的问题。同时在真正意义上做到了前后端共用一套代码。

### SSR的实现原理
客户端请求服务器，服务器根据请求地址获得匹配的组件，在调用匹配到的组件返回 Promise (官方是preFetch方法)来将需要的数据拿到。最后再通过
```
<script>window.__initial_state=data</script>
``` 

将其写入网页，最后将服务端渲染好的网页返回回去。
