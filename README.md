# myvue
myvue-demo

:bug:


实例 demo: https://github.com/bailicangdu/vue2-elm

>基础框架搭建
公共插件

## vue文档
 [vue中文网：http://cn.vuejs.org/](http://cn.vuejs.org/)
 
 [vuex中文网：http://vuex.vuejs.org/zh-cn/](http://vuex.vuejs.org/zh-cn/)
 
 [vue-resource：https://github.com/pagekit/vue-resource/blob/master/docs/http.md](https://github.com/pagekit/vue-resource/blob/master/docs/http.md)//暂不用
 
 [axios](https://github.com/mzabriskie/axios)//请求资源官网建议用
 
 [vue-loader](https://vue-loader.vuejs.org/zh-cn/) : vue-loader 是一个 webpack 的 loader，可以将用下面这个格式编写的 Vue 组件转换为 JavaScript 模块
 
 [vue-router2：http://router.vuejs.org/zh-cn/](http://router.vuejs.org/zh-cn/)
 
 [Mint UI：http://mint-ui.github.io/#!/zh-cn](http://mint-ui.github.io/#!/zh-cn)
 [element UI](http://element.eleme.io/1.4/#/zh-CN/component/time-picker)
 
 [vux Mobile UI Components](https://github.com/airyland/vux)：https://github.com/airyland/vux
 - 中文文档：https://vux.li/#/
 
 基于Vue2.x的移动端组件库：[YDUI ](https://github.com/ydcss/vue-ydui)：https://github.com/ydcss/vue-ydui
 - 文档： http://vue.ydui.org/docs/

Vant：轻量、可靠的移动端 Vue 组件库
  - https://github.com/youzan/vant
  - https://youzan.github.io/vant/#/zh-CN/intro


- 管理Vue 2.0组件中的页面元信息。支持SSR +流媒体
  - vue-meta: https://github.com/declandewet/vue-meta


- vue-treeselect: 下拉树形结构选择
  - GitHub: https://github.com/riophae/vue-treeselect
  
- Native desktop applications using Vue.js.
  - https://github.com/mimecorg/vuido
  
- 网页版海报排版设计:demo
  - https://github.com/CB-ysx/pageDesign
  
  
- Vue 折腾记 - (11) @Vue/Cli 3.0.0 图形化项目管理,相当人性化
 - 安装 npm i -g @vue/cli ，执行vue ui, 会默认初始化localhost:8000且自动打开

-

- vue-awesome-swiper: 
  - https://github.com/surmon-china/vue-awesome-swiper
  
  
- 基于Vue+Vuex+iView的电子商城网站
  - https://github.com/PowerDos/Mall-Vue
  
  
 
 - Auto responsive grid layout library for Vue（自适应布局）
   - https://github.com/xudafeng/autoresponsive-vue
 
 - NativeScript和Vue的原生移动应用程序
   - https://github.com/nativescript-vue/nativescript-vue
 
 
 - 基于vue2 + mintUI + vuex构建的高仿京东App大型商城网站
   - https://github.com/Caitingwei/vue2-jd
 
 
 
 - 基于vue，iOS风格的picker组件，支持三级联动，日期(年.月.日)，时间(时:分)，日期+时间，年，年+月
   - https://github.com/YuanWing/vue-ios-pickers
   
- 一键构建基于vue+element-ui+axios+mockjs的通用中后台管理模板的cli工具
  - https://github.com/weenta/vue-admin-cli/tree/dev
   
- Vue.js 源码解析 
  - https://github.com/answershuto/learnVue
  
  
- mpvue构建微信小程序
  - https://github.com/Mosasa/wx-mpvue
  
  
- 高仿掘金，整合 vue + nuxt + axios + vuex + vue-router (nuxt 自带 vuex 和 vue-router)，  
  一个基于 Nuxt 的服务器端渲染 Demo   
 - https://github.com/xuqiang521/nuxt-ssr-demo
 - http://www.qiangdada.cn/
-----------------------------------------------------------------


  之前在使用axios发现每次调用接口都会有两个请求，第一个请求时option请求，而且看不到请求参数，  
  当时也没注意，只当做是做了一次预请求，判断接口是否通畅，但是最近发现并不是那么回事。

  首先我们知道了额外的一次请求时option请求，那么这个是干嘛用的呢？

如果只是普通的 ajax 请求，也不会发起这个请求，只有当 ajax 请求绑定了 upload 的事件并且跨域的时候，就会自动发起这个请求。详细看   http://www.tuicool.com/articles/3UBzIbb。

这样就明了了，就是我们有upload事件绑定（一般都是本地调试，所以会有跨域），我仔细看了下axios文档，发现config配置文件中有两个参数  

```

// onUploadProgress: function(progressEvent) {
    //     // Do whatever you want with the native progress event
    // },


 // onDownloadProgress: function(progressEvent) {
 //     // Do whatever you want with the native progress event
 // },

```
分别处理上传和下载事件，也就是这里绑定了upload事件，所以每次请求都会有个option请求。

解决方案很简单，直接注释掉就好了，当然如果开发的工程上线使用跟请求的接口是同一个域名下自然不会两次请求。  
都看个人需求吧，关于axios的使用上一篇博文有介绍http://www.cnblogs.com/Upton/p/6180512.html



### npm ERR! code EINTEGRITY 解决方案

```
https://github.com/npm/npm/issues/16861

npm升级后，npm install 报错了，这就尴尬了。
Google了一下在这里(https://github.com/npm/npm/issues/16861)找到了解决方案：
里面各种解决方案，让Try这个命令Try那个命令，看着一脸懵逼不知道该用那个命令，浏览评论的时候发现“npm cache verify”这条命令帮助了不少人，然后果断在iterm2执行了，嗯，莫名其妙的好了。

评论里的命令有下面这些：

npm cache verify
npm cache clean
npm cache clean --force
npm i -g npm
grep -ir "sha1-xxxxxxxxxxxxxxxx" ~/.npm

实在不行就一条一条执行试试

```


## github设置添加SSH

很多朋友在用github管理项目的时候，都是直接使用https url克隆到本地，当然也有有些人使用 SSH url 克隆到本地。然而，为什么绝大多数人会使用https url克隆呢？

这是因为，使用https url克隆对初学者来说会比较方便，复制https url 然后到 git Bash 里面直接用clone命令克隆到本地就好了。而使用 SSH url 克隆却需要在

克隆之前先配置和添加好 SSH key 。

因此，如果你想要使用 SSH url 克隆的话，你必须是这个项目的拥有者。否则你是无法添加 SSH key 的。

 

生成多个公钥请点击：http://www.cnblogs.com/ayseeing/p/4445194.html

 

https 和 SSH 的区别：
1、前者可以随意克隆github上的项目，而不管是谁的；而后者则是你必须是你要克隆的项目的拥有者或管理员，且需要先添加 SSH key ，否则无法克隆。

2、https url 在push的时候是需要验证用户名和密码的；而 SSH 在push的时候，是不需要输入用户名的，如果配置SSH key的时候设置了密码，则需要输入密码的，

否则直接是不需要输入密码的。

 


 

在 github 上添加 SSH key 的步骤：
1、首先需要检查你电脑是否已经有 SSH key 

运行 git Bash 客户端，输入如下代码：

$ cd ~/.ssh
$ ls
这两个命令就是检查是否已经存在 id_rsa.pub 或 id_dsa.pub 文件，如果文件已经存在，那么你可以跳过步骤2，直接进入步骤3。

 

2、创建一个 SSH key 

$ ssh-keygen -t rsa -C "your_email@example.com"
代码参数含义：

-t 指定密钥类型，默认是 rsa ，可以省略。
-C 设置注释文字，比如邮箱。
-f 指定密钥文件存储文件名。

以上代码省略了 -f 参数，因此，运行上面那条命令后会让你输入一个文件名，用于保存刚才生成的 SSH key 代码，如：

Generating public/private rsa key pair.
# Enter file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]
当然，你也可以不输入文件名，使用默认文件名（推荐），那么就会生成 id_rsa 和 id_rsa.pub 两个秘钥文件。

 

接着又会提示你输入两次密码（该密码是你push文件的时候要输入的密码，而不是github管理者的密码），

当然，你也可以不输入密码，直接按回车。那么push的时候就不需要输入密码，直接提交到github上了，如：

Enter passphrase (empty for no passphrase): 
# Enter same passphrase again:
接下来，就会显示如下代码提示，如：

Your identification has been saved in /c/Users/you/.ssh/id_rsa.
# Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
# The key fingerprint is:
# 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com
当你看到上面这段代码的收，那就说明，你的 SSH key 已经创建成功，你只需要添加到github的SSH key上就可以了。

 

3、添加你的 SSH key 到 github上面去

a、首先你需要拷贝 id_rsa.pub 文件的内容，你可以用编辑器打开文件复制，也可以用git命令复制该文件的内容，如：

$ clip < ~/.ssh/id_rsa.pub
b、登录你的github账号，从又上角的设置（ Account Settings ）进入，然后点击菜单栏的 SSH key 进入页面添加 SSH key。

c、点击 Add SSH key 按钮添加一个 SSH key 。把你复制的 SSH key 代码粘贴到 key 所对应的输入框中，记得 SSH key 代码的前后不要留有空格或者回车。当然，上面的 Title 所对应的输入框你也可以输入一个该 SSH key 显示在 github 上的一个别名。默认的会使用你的邮件名称。

 

4、测试一下该SSH key

在git Bash 中输入以下代码

$ ssh -T git@github.com
当你输入以上代码时，会有一段警告代码，如：

The authenticity of host 'github.com (207.97.227.239)' can't be established.
# RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
# Are you sure you want to continue connecting (yes/no)?
这是正常的，你输入 yes 回车既可。如果你创建 SSH key 的时候设置了密码，接下来就会提示你输入密码，如：

Enter passphrase for key '/c/Users/Administrator/.ssh/id_rsa':
当然如果你密码输错了，会再要求你输入，知道对了为止。

注意：输入密码时如果输错一个字就会不正确，使用删除键是无法更正的。

密码正确后你会看到下面这段话，如：

Hi username! You've successfully authenticated, but GitHub does not
# provide shell access.
如果用户名是正确的,你已经成功设置SSH密钥。如果你看到 “access denied” ，者表示拒绝访问，那么你就需要使用 https 去访问，而不是 SSH 。


## jQuery-serialize()输出序列化form表单值

定义和用法  
serialize() 方法通过序列化表单值，创建 URL 编码文本字符串。   
您可以选择一个或多个表单元素（比如 input 及/或 文本框），或者 form 元素本身。   
序列化的值可在生成 AJAX 请求时用于 URL 查询字符串中。   

语法   
复制代码 代码如下:  

$(selector).serialize() 

详细说明   
.serialize() 方法创建以标准 URL 编码表示的文本字符串。它的操作对象是代表表单元素集合的 jQuery 对象。  

**注释：只会将”成功的控件“序列化为字符串。如果不使用按钮来提交表单，则不对提交按钮的值序列化。如果要表单元素的值包含到序列字符串中，元素必须使用 name 属性



### vue 点击空白处隐藏弹出层
```
<el-input ref="treeinput" readonly class="w-230" v-if="ruleForm.store_mode == 1? true:false" v-model="ruleForm.showSelText" placeholder="请选择分组" @focus = "toggle" @blur="blurTree">
          <!-- <el-option label="区域一" value="100"></el-option>
          <el-option label="区域二" value="200"></el-option> -->

        </el-input>
        <div class="el-tree-out" ref="treediv">
          <div class="el-tree-contain" v-show="ruleForm.store_mode == 1 && treeFlag">
            <el-tree v-show="ruleForm.store_mode == 1 && treeFlag" :data="storeData" node-key="storeGroupId" ref="tree" show-checkbox default-expand-all :props="defaultProps" :expand-on-click-node="false" @check="checkStore" @node-click="handleNodeClick">
            </el-tree>
            <div class="tree-btns" v-show="ruleForm.store_mode == 1 && treeFlag">
              <el-button @click="cancelsel">取消</el-button><el-button @click="confirmsel" type="primary">确认</el-button>
            </div>
          </div>
        </div>
        
        
        
        toggle: function(e) {
        console.log(e)
        var that = this
        that.treeFlag ? that.hide() : that.show()
        that.treeFlag = true
      },

      show () {
        var that = this
        that.treeFlag = true
        document.addEventListener('click', that.hidePanel, false)
      },

      hide () {
        var that = this
        that.treeFlag = false
        document.removeEventListener('click', that.hidePanel, false)
      },

      hidePanel (e) {
        var that = this
        console.log(that.$refs.tree ,e.target,that.$refs.treediv)
          if (!that.$refs.treediv.contains(e.target)&& !that.$refs.treeinput.$el.contains(e.target)) {
              that.hide()
          }
      },

```
