# 1.8.0 vue3全局过滤器

```
#全局过滤器
如果在应用中全局注册了过滤器，那么在每个组件中用计算属性或方法调用来替换它可能就没那么方便了。

相反地，你可以通过全局属性在所有组件中使用它:

// main.js
const app = createApp(App)

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  }
}



然后，你可以通过 $filters 对象修改所有的模板，像下面这样：

<template>
  <h1>Bank Account Balance</h1>
  <p>{{ $filters.currencyUSD(accountBalance) }}</p>
</template>
注意，这种方式只能用于方法中，不可以在计算属性中使用
```



## 参考
- [全局过滤器](https://vue3js.cn/docs/zh/guide/migration/filters.html#%E5%85%A8%E5%B1%80%E8%BF%87%E6%BB%A4%E5%99%A8)
