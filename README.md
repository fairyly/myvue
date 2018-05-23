# myvue

>vue 插件开发,发布 vue 插件到 npm 

* vue init webpack-simple vue-plugin-demo
* cd vue-plugin-demo

  到 src 目录,新建 lib 目录

* cd src 
* mkdir lib
* 到 lib 目录,新建 index.js 和 vue-area-select.vue


* index.js
```
import vueAreaSelect from './vue-area-select.vue' // 导入组件

const AreaSelect = {
    install(Vue, options) {
        Vue.component(vueAreaSelect.name, vueAreaSelect) // vueAreaSelect.name 组件的name属性
        // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已
        // Vue.prototype.$xxx  // 最终可以在任何地方通过 this.$xxx 调用
        // 虽然没有明确规定用$开头  但是大家都默认遵守这个规定
    }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueAreaSelect);
}
export default AreaSelect

export {
  vueAreaSelect
}
```

## 打包以及发布

* webpack.config.js 修改

```
module.exports = { 
// entry: './src/main.js', // 项目入口 我们通过npm run dev 就是从这里进去的 我们通过run build 打包编译也是 
// 因为我们要打包的插件在lib里面 所以稍稍改一下 
entry: './src/lib/index.js', // 注释掉原有的 
output: { path: path.resolve(__dirname, './dist'), 
publicPath: '/dist/', 
// filename: 'build.js' // 打包后输出的文件名 
filename: 'vue-area-select.js', // 我们可不想打包后叫build.js 多low啊 起一个与项目相对应的 
library: 'AreaSelect', // library指定的就是你使用require时的模块名，这里便是require("AreaSelect") 
libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。 
umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。 },

```

* 修改package.json
```
{
  "name": "vue-plugin-demo",
  "description": "A Vue area select plugin",
  "version": "1.0.0",
  "author": "fairyly <fairyilys@gmail.com>",
  "main": "dist/vue-area-select.js",
  "license": "MIT",
  "private": false,
```

* .gitignore 文件
```
  因为要用dist文件夹，所以在.gitignore文件中把dist/去掉
```
* 打包
```
  npm run build 
```
>每次修改后,发布都是要先打包 `npm run build `

* 发布
```
npm login 

npm publish
```


## 使用
```
然后，在新项目的入口文件（main.js）中引入

import 变量名 from '组件名称'

Vue.use(变量名)



使用插件时可以用npm install 组件名称 来安装
```

