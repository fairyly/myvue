# vuex

- state 用来数据共享数据存储
- mutation 用来注册改变数据状态
- getters 用来对共享数据进行过滤操作
- action 解决异步改变共享数据

- 用官方提供的vue-cli webpack版本

在src目录下我们创一个vuex文件夹，分别创建index.js,mutations.js,state.js,getters.js,actions.js

分别把这四个特性放入index.js中进行store的实列化

```
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    state,
    getters,
    mutations,
    actions
  },
  getters
})

export default store
```

再把实列化的store引入就是所谓的index.js文件夹引入到main.js中，也可以同时把store注册到每一个组件中

```
import store from './store'

new Vue({
  el: '#app',
  router,
  store
})

```
