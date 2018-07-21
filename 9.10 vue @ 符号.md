# vue @ 符号

这是vue 自带的， 表示src ，

resolve指路径别名
 
在build/webpack.base.conf.js里面的resolve的alias里面可以看到，指的是目录src

 '@': resolve('src'),

```
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'components': resolve('src/components'),
      'view': resolve('src/view')
    }
  },
```
