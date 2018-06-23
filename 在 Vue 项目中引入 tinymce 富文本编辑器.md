# 在 Vue 项目中引入 tinymce 富文本编辑器

- GitHub： https://github.com/tinymce/tinymce-vue
- 配置： https://www.tinymce.com/docs/configure/
- 插件： https://www.tinymce.com/docs/plugins/

## 常见的富文本编辑器
- wangEditor 很轻量、简洁编辑：
  - GitHub：  https://github.com/wangfupeng1988/wangEditor/
  - doc： https://www.kancloud.cn/wangfupeng/wangeditor3/332599
  - website： http://www.wangeditor.com/
- 

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
### 图片上传配置
> 要使图片上传功能正常运行，必须设置images_upload_url或images_upload_handler选项。

  - https://www.tinymce.com/docs/get-started/upload-images/
  - 如果没有配置 `images_upload_url`  ,不出现图片上传的按钮，只出现填写图片链接
```
handleImgUpload (blobInfo, success, failure) {
  let formdata = new FormData()
  formdata.set('upload_file', blobInfo.blob())
  axios.post('/api/upload', formdata).then(res => {
    success(res.data.data.src)
  }).catch(res => {
    failure('error')
  })
}
```



## test.vue
```
<template>
    <div class="tinymce">
        test
        <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
      <div v-html='tinymceHtml'></div>
    </div>
</template>

<script>
import axios from 'axios'
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
        name: "tinymce",
        data(){
          return {
            tinymceHtml: '请输入内容',
            init: {
              // language_url: '/static/tinymce/zh_CN.js',
              // language: 'zh_CN',
              skin_url: '/static/tinymce/skins/lightgray',
              height: 300,
              // 图片上传
              // without images_upload_url set, Upload tab won't show up
              // images_upload_url: '',
              // images_upload_base_path: '/some/basepath',
              // images_upload_credentials: true, //是否应传递cookie等跨域的凭据
              // images_upload_handler提供三个参数：blobInfo, success, failure
              images_upload_handler: (blobInfo, success, failure)=>{
                console.log(blobInfo)
                this.handleImgUpload(blobInfo, success, failure)
              },
              // 添加插件
              plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
              toolbar:
                'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
              branding: false,
              setup: function(editor) {
                  // 点击编辑框回调
                  editor.on('click', function(e) {
                    console.log('Editor was clicked');
                  });
              }

            }
          }
        },
        methods:{
          handleImgUpload (blobInfo, success, failure) {
            let formdata = new FormData()
            formdata.set('upload_file', blobInfo.blob())
            axios.post('/api/upload', formdata).then(res => {
              success(res.data.data.src)
            }).catch(res => {
              failure('error')
            })
          }
        },
        mounted() {
          // tinymce V4
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

## 插件
- https://www.tinymce.com/docs/plugins/


## 参考
- https://www.cnblogs.com/wisewrong/p/8985471.html（目前参考这个）
- https://cnodejs.org/topic/592fdaed1e7e75f60c1ad82d
