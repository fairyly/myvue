# 在 Vue 项目中引入 tinymce 富文本编辑器

- https://github.com/tinymce/tinymce-vue

## 使用
- 安装
```
$ npm install @tinymce/tinymce-vue -S

npm install tinymce -S

安装之后，在 node_modules 中找到 tinymce/skins 目录，然后将 skins 目录拷贝到 static 目录下

// 如果是使用 vue-cli 3.x 构建的 typescript 项目，就放到 public 目录下，文中所有 static 目录相关都这样处理

tinymce 默认是英文界面，所以还需要下载一个中文语言包（记得搭梯子！搭梯子！搭梯子！）

然后将这个语言包放到 static 目录下，为了结构清晰，我包了一层 tinymce 目录

static
|____tinemce
     |___skins
```
## test.vue
```
<template>
    <div class="shop-tag-wrap">
        <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
    </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
    export default {
        name: "tintmce",
        data(){
          return {
            tinymceHtml: '请输入内容',
            init: {
              //language_url: '/static/tinymce/zh_CN.js',
              //language: 'zh_CN',
              skin_url: '/static/tinymce/skins/lightgray',
              height: 300,
              plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
              toolbar:
                'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
              branding: false
            }
          }
        },
        mounted() {
          tinymce.init({})
        },
        components: {
            Editor
        }
    }
</script>

<style lang="less" scoped>

</style>

```

## 参考
- https://www.cnblogs.com/wisewrong/p/8985471.html（目前参考这个）
- https://cnodejs.org/topic/592fdaed1e7e75f60c1ad82d
