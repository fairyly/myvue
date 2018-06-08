# scss或者less 深层嵌套样式不生效问题

**<style> 上的 scoped 会使我无法修改子组件中的样式**

* https://github.com/vuejs/vue-loader/issues/821

可以使用 /deep/
```
.login-container /deep/ .el-input__inner { // some style }这样
```

说可以使用 `>>>` 
