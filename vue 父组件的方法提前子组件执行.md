# vue 父组件的方法提前子组件执行


父子组件钩子汉族加载顺序：
```
father created
father before mounted

son created
son before mount
son mounted
father mounted

created() {
    // this.selectReplayStyle()
    console.log('create1')
  },
  beforeMount() {
    console.log('beforeMount1')
  },
```
