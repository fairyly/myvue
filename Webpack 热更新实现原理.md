# Webpack 热更新实现原理

- Webpack 配置添加 HotModuleReplacementPlugin 插件
- Node Server 引入 webpack-dev-middlerware 和 webpack-hot-middleware 插件，
- 如果是 koa 引入对应的 koa-webpack-dev-middlerware 和 koa-webpack-hot-middleware


### EventSource 服务端与客户端通信
- EventSource 是 HTML5 中 Server-sent Events 规范的一种技术实现。
- EventSource 接口用于接收服务器发送的事件。
- 它通过HTTP连接到一个服务器，以text/event-stream 格式接收事件, 不关闭连接。
- 通过 EventSource 服务端可以主动给客户端发现消息，使用的是 HTTP协议，单项通信，只能服务器向浏览器发送；
- 与 WebSocket 相比轻量，使用简单，支持断线重连


## 客户端通信实现

服务端通过 EventSource 发送消息给客户端了，我们来看看客户端的通信实现。打开 webpack-hot-middleware/client.js 的代码实现：

```
var source = new window.EventSource('(http://127.0.0.1:9000/__webpack_hmr)');
source.onopen = handleOnline; // 建立链接
source.onerror = handleDisconnect;
source.onmessage = handleMessage; // 接收服务端消息，然后进行相应处理
```


作者：hubcarl
链接：https://www.jianshu.com/p/652fbae768bf
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
