# myvue

> vuedemo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 今天通过npm 安装 install 的时候出现的问题

```
npm install
npm WARN deprecated angular-cli@1.0.0-beta.28.3: angular-cli has been renamed to @angular/cli. Please update your dependencies.

> node-sass@4.5.0 install E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.5.0/win32-x64-51_binding.node
Cannot download "https://github.com/sass/node-sass/releases/download/v4.5.0/win32-x64-51_binding.node":

ESOCKETTIMEDOUT

Hint: If github.com is not accessible in your location
try setting a proxy via HTTP_PROXY, e.g.

export HTTP_PROXY=http://example.com:1234

or configure npm proxy via

npm config set proxy http://example.com:8080

> node-sass@4.5.0 postinstall E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass
> node scripts/build.js

Binary found at E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\vendor\win32-x64-51\binding.node
Testing binary
Binary has a problem: Error: %1 is not a valid Win32 application.
\\?\E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\vendor\win32-x64-51\binding.node
at Object.Module._extensions..node (module.js:598:18)
at Module.load (module.js:488:32)
at tryModuleLoad (module.js:447:12)
at Function.Module._load (module.js:439:3)
at Module.require (module.js:498:17)
at require (internal/module.js:20:19)
at module.exports (E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\lib\binding.js:19:10)
at Object.<anonymous> (E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\lib\index.js:14:35)
at Module._compile (module.js:571:32)
at Object.Module._extensions..js (module.js:580:10)
Building the binary locally
Building: E:\node\node.exe E:\Workspace_WebStorm\angular2\node_modules\node-gyp\bin\node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=
gyp info it worked if it ends with ok
gyp verb cli [ 'E:\\node\\node.exe',
gyp verb cli 'E:\\Workspace_WebStorm\\angular2\\node_modules\\node-gyp\\bin\\node-gyp.js',
gyp verb cli 'rebuild',
gyp verb cli '--verbose',
gyp verb cli '--libsass_ext=',
gyp verb cli '--libsass_cflags=',
gyp verb cli '--libsass_ldflags=',
gyp verb cli '--libsass_library=' ]
gyp info using node-gyp@3.5.0
gyp info using node@7.5.0 | win32 | x64
gyp verb command rebuild []
gyp verb command clean []
gyp verb clean removing "build" directory
gyp verb command configure []
gyp verb check python checking for Python executable "python2" in the PATH
gyp verb `which` failed Error: not found: python2
gyp verb `which` failed at getNotFoundError (E:\Workspace_WebStorm\angular2\node_modules\which\which.js:13:12)
gyp verb `which` failed at F (E:\Workspace_WebStorm\angular2\node_modules\which\which.js:68:19)
gyp verb `which` failed at E (E:\Workspace_WebStorm\angular2\node_modules\which\which.js:80:29)
gyp verb `which` failed at E:\Workspace_WebStorm\angular2\node_modules\which\which.js:89:16
gyp verb `which` failed at E:\Workspace_WebStorm\angular2\node_modules\isexe\index.js:44:5
gyp verb `which` failed at E:\Workspace_WebStorm\angular2\node_modules\isexe\windows.js:29:5
gyp verb `which` failed at FSReqWrap.oncomplete (fs.js:112:15)
gyp verb `which` failed python2 { Error: not found: python2
gyp verb `which` failed at getNotFoundError (E:\Workspace_WebStorm\angular2\node_modules\which\which.js:13:12)
gyp verb `which` failed at F (E:\Workspace_WebStorm\angular2\node_modules\which\which.js:68:19)
gyp verb `which` failed at E (E:\Workspace_WebStorm\angular2\node_modules\which\which.js:80:29)
gyp verb `which` failed at E:\Workspace_WebStorm\angular2\node_modules\which\which.js:89:16
gyp verb `which` failed at E:\Workspace_WebStorm\angular2\node_modules\isexe\index.js:44:5
gyp verb `which` failed at E:\Workspace_WebStorm\angular2\node_modules\isexe\windows.js:29:5
gyp verb `which` failed at FSReqWrap.oncomplete (fs.js:112:15) code: 'ENOENT' }
gyp verb check python checking for Python executable "python" in the PATH
gyp verb `which` succeeded python C:\Python27\python.EXE
gyp verb check python version `C:\Python27\python.EXE -c "import platform; print(platform.python_version());"` returned: "2.7.13\r\n"
gyp verb get node dir no --target version specified, falling back to host node version: 7.5.0
gyp verb command install [ '7.5.0' ]
gyp verb install input version string "7.5.0"
gyp verb install installing version: 7.5.0
gyp verb install --ensure was passed, so won't reinstall if already installed
gyp verb install version is already installed, need to check "installVersion"
gyp verb got "installVersion" 9
gyp verb needs "installVersion" 9
gyp verb install version is good
gyp verb get node dir target node version installed: 7.5.0
gyp verb build dir attempting to create "build" dir: E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\build
gyp verb build dir "build" dir needed to be created? E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\build
gyp verb build/config.gypi creating config file
gyp verb build/config.gypi writing out config file: E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\build\config.gypi
gyp verb config.gypi checking for gypi file: E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\config.gypi
gyp verb common.gypi checking for gypi file: E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\common.gypi
gyp verb gyp gyp format was not specified; forcing "msvs"
gyp info spawn C:\Python27\python.EXE
gyp info spawn args [ 'E:\\Workspace_WebStorm\\angular2\\node_modules\\node-gyp\\gyp\\gyp_main.py',
gyp info spawn args 'binding.gyp',
gyp info spawn args '-f',
gyp info spawn args 'msvs',
gyp info spawn args '-G',
gyp info spawn args 'msvs_version=auto',
gyp info spawn args '-I',
gyp info spawn args 'E:\\Workspace_WebStorm\\angular2\\node_modules\\angular-cli\\node_modules\\node-sass\\build\\config.gypi',
gyp info spawn args '-I',
gyp info spawn args 'E:\\Workspace_WebStorm\\angular2\\node_modules\\node-gyp\\addon.gypi',
gyp info spawn args '-I',
gyp info spawn args 'C:\\Users\\lyx\\.node-gyp\\7.5.0\\include\\node\\common.gypi',
gyp info spawn args '-Dlibrary=shared_library',
gyp info spawn args '-Dvisibility=default',
gyp info spawn args '-Dnode_root_dir=C:\\Users\\lyx\\.node-gyp\\7.5.0',
gyp info spawn args '-Dnode_gyp_dir=E:\\Workspace_WebStorm\\angular2\\node_modules\\node-gyp',
gyp info spawn args '-Dnode_lib_file=node.lib',
gyp info spawn args '-Dmodule_root_dir=E:\\Workspace_WebStorm\\angular2\\node_modules\\angular-cli\\node_modules\\node-sass',
gyp info spawn args '--depth=.',
gyp info spawn args '--no-parallel',
gyp info spawn args '--generator-output',
gyp info spawn args 'E:\\Workspace_WebStorm\\angular2\\node_modules\\angular-cli\\node_modules\\node-sass\\build',
gyp info spawn args '-Goutput_dir=.' ]
gyp verb command build []
gyp verb build type Release
gyp verb architecture x64
gyp verb node dev dir C:\Users\lyx\.node-gyp\7.5.0
gyp verb found first Solution file build/binding.sln
gyp verb could not find "msbuild.exe" in PATH - finding location in registry
gyp verb "Release" dir needed to be created? null
gyp verb copying "node.lib" for x64 C:\Users\lyx\.node-gyp\7.5.0\Release\node.lib
gyp info spawn C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe
gyp info spawn args [ 'build/binding.sln',
gyp info spawn args '/nologo',
gyp info spawn args '/p:Configuration=Release;Platform=x64' ]
在此解决方案中一次生成一个项目。若要启用并行生成，请添加“/m”开关。
生成启动时间为 2017/2/26 16:01:32。
节点 1 上的项目“E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\build\binding.sln”(默认目标)。
ValidateSolutionConfiguration:
正在生成解决方案配置“Release|x64”。
MSBUILD : error MSB3428: 未能加载 Visual C++ 组件“VCBuild.exe”。要解决此问题，1) 安装 .NET Framework 2.0 SDK；2) 安装 Microsoft Visual Stu
dio 2005；或 3) 如果将该组件安装到了其他位置，请将其位置添加到系统路径中。 [E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-
sass\build\binding.sln]
已完成生成项目“E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\build\binding.sln”(默认 目标)的操作 - 失败
。


生成失败。

“E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass\build\binding.sln”(默认目标) (1) ->
(_src_\libsass 目标) ->
MSBUILD : error MSB3428: 未能加载 Visual C++ 组件“VCBuild.exe”。要解决此问题，1) 安装 .NET Framework 2.0 SDK；2) 安 装 Microsoft Visual S
tudio 2005；或 3) 如果将该组件安装到了其他位置，请将其位置添加到系统路径中。 [E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\nod
e-sass\build\binding.sln]

0 个警告
1 个错误

已用时间 00:00:00.57
gyp ERR! build error
gyp ERR! stack Error: `C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe` failed with exit code: 1
gyp ERR! stack at ChildProcess.onExit (E:\Workspace_WebStorm\angular2\node_modules\node-gyp\lib\build.js:276:23)
gyp ERR! stack at emitTwo (events.js:106:13)
gyp ERR! stack at ChildProcess.emit (events.js:192:7)
gyp ERR! stack at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)
gyp ERR! System Windows_NT 10.0.14393
gyp ERR! command "E:\\node\\node.exe" "E:\\Workspace_WebStorm\\angular2\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
gyp ERR! cwd E:\Workspace_WebStorm\angular2\node_modules\angular-cli\node_modules\node-sass
gyp ERR! node -v v7.5.0
gyp ERR! node-gyp -v v3.5.0
gyp ERR! not ok
Build failed with error code: 1
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.1: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN enoent ENOENT: no such file or directory, open 'E:\Workspace_WebStorm\angular2\node_modules\node-sass\package.json'
npm WARN sass-loader@4.1.1 requires a peer of node-sass@^3.4.2 || ^4.0.0 but none was installed.
npm ERR! Windows_NT 10.0.14393
npm ERR! argv "E:\\node\\node.exe" "E:\\node\\node_modules\\npm\\bin\\npm-cli.js" "install"
npm ERR! node v7.5.0
npm ERR! npm v4.1.2
npm ERR! code ELIFECYCLE

npm ERR! node-sass@4.5.0 postinstall: `node scripts/build.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@4.5.0 postinstall script 'node scripts/build.js'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the node-sass package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR! node scripts/build.js
npm ERR! You can get information on how to open an issue for this project with:
npm ERR! npm bugs node-sass
npm ERR! Or if that isn't available, you can get their info via:
npm ERR! npm owner ls node-sass
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR! E:\Workspace_WebStorm\angular2\npm-debug.log

------------------------------------------------------------------------

复制代码
生成启动时间为 2016/6/27 星期一 11:39:46。
节点 1 上的项目“C:\Users\世民\node_modules\node-sass\build\binding.sln”(默认目标)。
ValidateSolutionConfiguration:
  正在生成解决方案配置“Release|x64”。
MSBUILD : error MSB3428: 未能加载 Visual C++ 组件“VCBuild.exe”。要解决此问题，1) 安装 .NET Framework 2.0 SDK；2) 安装 Microsoft Visual Studio 2005；或 3) 如果将该组件安装到了其他位置，请将其位置添加到系统路径
中。 [C:\Users\世民\node_modules\node-sass\build\bindi
ng.sln]
已完成生成项目“C:\Users\世民\node_modules\node-sass\build\binding.sln”(默认目标)的操作 - 失败。


生成失败。

“C:\Users\世民\node_modules\node-sass\build\binding.sln”(默认目标) (1) ->
(_src_\libsass 目标) ->
  MSBUILD : error MSB3428: 未能加载 Visual C++ 组件“VCBuild.exe”。要解决此问题，1) 安装 .NET Framework 2.0 SDK；2) 安装 Microsoft Visual Studio 2005；或 3) 如果将该组件安装到了其他位置，请将其位置添加到系统路
径中。 [C:\Users\世民\node_modules\node-sass\build\bin
ding.sln]

    0 个警告
    1 个错误



```
复制代码  
然后呢，就一头赛到vc++组件里去，安装各种无用的东西，尝试过各种解决方案，最后实在是没有办法了，就仔细的从头到尾的看错误信息，然后在 node   scripts/install.js 之后发现这么一句话  

Cannot download "https://github.com/sass/node-sass/releases/download/v3.8.0/win32-x64-46_binding.node":

这句话大家都懂的哈，我就不说了，这里我也不知道为什么会下载失败，因为我的电脑全局代理的，正常的访问任何网站都是无阻碍的，百思不得解，

好吧那我就自己下载吧（为什么自己下载？因为我在google的时候也是发现了写有用的东西，虽然没那么直观哈，但是也给了我很多帮助）

下载完了之后把它注册成全局环境变量，两种方式：

第一种：直接右键我的电脑--》属性--》高级系统设置--》环境变量--》添加

第二种：set XXX=文件路经--》set SASS_BINARY_PATH=F:\lishiming\tools\node-sass\win32-x64-46_binding.node

查看环境是否合适：echo %SASS_BINARY_PATH%

如果打印出来您配置好的文件地址那就ok了，

最后再来试试安装：npm i -g node-sass


## 直接引入vue2，vue-router时候在v-for循环中的问题，路由组件中循环数据，需要在组件中加入data方法，*不是date（）*,更不是data:{},组件中data必须是个函数data:function(){return {ms:'data'}}或者 data(){};

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>html</title>
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="yes" name="apple-touch-fullscreen">
    <meta content="telephone=no,email=no" name="format-detection">
    <meta name="App-Config" content="fullscreen=yes,useHistoryState=yes,transition=yes">
    <!-- 引入样式 -->
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- 引入组件库 -->
    <script src="js/jquery-3.2.0.min.js"></script>
    <script src="js/vue.js"></script>
    <script src="js/index.js"></script>
    <script src="js/vue-router.js"></script>
</head>

<body>
    <div id="app">
        <div class="wrapper">
            <div class="header">
                <!--<div class="logo">地铁安防管理系统</div> -->
                <div class="head-tit">地铁安防管理系统</div>
                <div class="user-info">
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
		                    <!--<img class="user-logo" src="../../../static/img/img.jpg">-->
		                    {{username}}<i class="el-icon-caret-bottom el-icon--right"></i>
		                </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="loginout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <!-- 头部结束 -->
            <div class="sidebar">
                <el-menu class="el-menu-vertical-demo" theme="dark" unique-opened router>
                    <!--:default-active="onRoutes"-->
                    <el-menu-item index="notice">报警通知</el-menu-item>
                    <el-menu-item index="history">历史记录</el-menu-item>
                    <el-menu-item index="video">视频内容</el-menu-item>
                    <el-menu-item index="blacklist">黑名单管理</el-menu-item>
                    <el-menu-item index="device">设备管理</el-menu-item>
                    <el-menu-item index="counts">阈值管理</el-menu-item>
                    <el-menu-item index="system">系统设置</el-menu-item>
                </el-menu>
            </div>
            <div class="content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
    <script src="js/oprate.js"></script>
    <script>
    // import {notice} from 'components/notice';
    var Main = {
        data() {
            return {
                name: 'linxin',
                notice: [{
                    message: 'Foo',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '已处理'
                }, {
                    message: 'Bar',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '处理'
                }]
            }
        },
        computed: {
            username() {
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            },
            onRoutes() {
                // return this.$route.path.replace('/','');
            }
        },
        methods: {
            handleCommand(command) {
                if (command == 'loginout') {
                    localStorage.removeItem('ms_username')
                        // this.$router.push('/login');
                }
            }
        }
    }
    const notice = {
        template: '<div>\
				    <div class="crumbs n-tit">\
				        <el-row>\
				            <el-col :span="8"><div class="grid-content">警报内容</div></el-col>\
				            <el-col :span="3"><div class="grid-content">视频截取</div></el-col>\
				            <el-col :span="4"><div class="grid-content">相关人物图片</div></el-col>\
				            <el-col :span="3"><div class="grid-content">查看监控</div></el-col>\
				            <el-col :span="4"><div class="grid-content">备注</div></el-col>\
				            <el-col :span="2"><div class="grid-content">操作</div></el-col>\
				        </el-row>\
				    </div>\
				    <div class="ms-doc n-con">\
				        <el-row v-for="item in notice">\
				            <el-col :span="8">\
				                <div class="n-grid-content">{{item.message}}</div>\
				            </el-col>\
				            <el-col :span="3">\
				                <div class="n-grid-content">{{item.video}}</div>\
				            </el-col>\
				            <el-col :span="4">\
				                <div class="n-grid-content">{{item.imgs}}</div>\
				            </el-col>\
				            <el-col :span="3">\
				                <div class="n-grid-content">{{item.videos}}</div>\
				            </el-col>\
				            <el-col :span="4">\
				                <div class="n-grid-content">{{item.beizhu}}</div>\
				            </el-col>\
				            <el-col :span="2">\
				                <div class="n-grid-content">\
				                    <el-button type="info">{{item.op}}</el-button>\
				                </div>\
				            </el-col>\
				        </el-row>\
				    </div>\
				</div>\
				',
        data: function() {
            return {
                notice: [{
                    message: 'Foo',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '已处理'
                }, {
                    message: 'Bar',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '处理'
                }]
            }
        }
    }

    const history = {
        template: `<div>
			    <div class="crumbs n-tit">
			        <el-row>
			            <el-col :span="8"><div class="grid-content">警报内容</div></el-col>
			            <el-col :span="3"><div class="grid-content">视频截取</div></el-col>
			            <el-col :span="4"><div class="grid-content">相关人物图片</div></el-col>
			            <el-col :span="3"><div class="grid-content">查看监控</div></el-col>
			            <el-col :span="4"><div class="grid-content">备注</div></el-col>
			            <el-col :span="2"><div class="grid-content">操作</div></el-col>
			        </el-row>
			    </div>
			    <div class="ms-doc n-con">
			        <el-row v-for="item in history">
			            <el-col :span="8">
			                <div class="n-grid-content">{{item.message}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.video}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.imgs}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.videos}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.beizhu}}
			                </div>
			            </el-col>
			            <el-col :span="2">
			                <div class="n-grid-content">
			                    <el-button type="info">{{item.op}}</el-button>
			                </div>
			            </el-col>
			        </el-row>
			    </div>

			</div>`,
		data: function() {
            return {
                history: [{
                    message: 'Foo',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '已处理'
                }, {
                    message: 'Bar',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '处理'
                }]
            }
        }
    }

    const video = {
        template: `<div>
			    <div class="crumbs n-tit">
			        <el-row>
			            <el-col :span="8"><div class="grid-content">警报内容</div></el-col>
			            <el-col :span="3"><div class="grid-content">视频截取</div></el-col>
			            <el-col :span="4"><div class="grid-content">相关人物图片</div></el-col>
			            <el-col :span="3"><div class="grid-content">查看监控</div></el-col>
			            <el-col :span="4"><div class="grid-content">备注</div></el-col>
			            <el-col :span="2"><div class="grid-content">操作</div></el-col>
			        </el-row>
			    </div>
			    <div class="ms-doc n-con">
			        <el-row v-for="item in video">
			            <el-col :span="8">
			                <div class="n-grid-content">{{item.message}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.video}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.imgs}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.videos}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.beizhu}}
			                </div>
			            </el-col>
			            <el-col :span="2">
			                <div class="n-grid-content">
			                    <el-button type="info">{{item.op}}</el-button>
			                </div>
			            </el-col>
			        </el-row>
			    </div>

			</div>`,
		data: function() {
            return {
                video: [{
                    message: 'Foo',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '已处理'
                }, {
                    message: 'Bar',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '处理'
                }]
            }
        }
    }

    const blacklist = {
        template: `<div>
			    <div class="crumbs n-tit">
			        <el-row>
			            <el-col :span="8"><div class="grid-content">警报内容</div></el-col>
			            <el-col :span="3"><div class="grid-content">视频截取</div></el-col>
			            <el-col :span="4"><div class="grid-content">相关人物图片</div></el-col>
			            <el-col :span="3"><div class="grid-content">查看监控</div></el-col>
			            <el-col :span="4"><div class="grid-content">备注</div></el-col>
			            <el-col :span="2"><div class="grid-content">操作</div></el-col>
			        </el-row>
			    </div>
			    <div class="ms-doc n-con">
			        <el-row v-for="item in blacklist">
			            <el-col :span="8">
			                <div class="n-grid-content">{{item.message}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.video}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.imgs}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.videos}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.beizhu}}
			                </div>
			            </el-col>
			            <el-col :span="2">
			                <div class="n-grid-content">
			                    <el-button type="info">{{item.op}}</el-button>
			                </div>
			            </el-col>
			        </el-row>
			    </div>

			</div>`,
		data: function() {
            return {
                blacklist: [{
                    message: 'Foo',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '已处理'
                }, {
                    message: 'Bar',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '处理'
                }]
            }
        }
    }

    const device = {
        template: `<div>
			    <div class="crumbs n-tit">
			        <el-row>
			            <el-col :span="8"><div class="grid-content">警报内容</div></el-col>
			            <el-col :span="3"><div class="grid-content">视频截取</div></el-col>
			            <el-col :span="4"><div class="grid-content">相关人物图片</div></el-col>
			            <el-col :span="3"><div class="grid-content">查看监控</div></el-col>
			            <el-col :span="4"><div class="grid-content">备注</div></el-col>
			            <el-col :span="2"><div class="grid-content">操作</div></el-col>
			        </el-row>
			    </div>
			    <div class="ms-doc n-con">
			        <el-row v-for="item in device">
			            <el-col :span="8">
			                <div class="n-grid-content">{{item.message}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.video}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.imgs}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.videos}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.beizhu}}
			                </div>
			            </el-col>
			            <el-col :span="2">
			                <div class="n-grid-content">
			                    <el-button type="info">{{item.op}}</el-button>
			                </div>
			            </el-col>
			        </el-row>
			    </div>

			</div>`,
		data: function() {
            return {
                device: [{
                    message: 'Foo',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '已处理'
                }, {
                    message: 'Bar',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '处理'
                }]
            }
        }
    }

    const counts = {
        template: `<div>
			    <div class="crumbs n-tit">
			        <el-row>
			            <el-col :span="8"><div class="grid-content">警报内容</div></el-col>
			            <el-col :span="3"><div class="grid-content">视频截取</div></el-col>
			            <el-col :span="4"><div class="grid-content">相关人物图片</div></el-col>
			            <el-col :span="3"><div class="grid-content">查看监控</div></el-col>
			            <el-col :span="4"><div class="grid-content">备注</div></el-col>
			            <el-col :span="2"><div class="grid-content">操作</div></el-col>
			        </el-row>
			    </div>
			    <div class="ms-doc n-con">
			        <el-row v-for="item in counts">
			            <el-col :span="8">
			                <div class="n-grid-content">{{item.message}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.video}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.imgs}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.videos}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.beizhu}}
			                </div>
			            </el-col>
			            <el-col :span="2">
			                <div class="n-grid-content">
			                    <el-button type="info">{{item.op}}</el-button>
			                </div>
			            </el-col>
			        </el-row>
			    </div>

			</div>`,
		data: function() {
            return {
                counts: [{
                    message: 'Foo',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '已处理'
                }, {
                    message: 'Bar',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '处理'
                }]
            }
        }
    }

    const system = {
        template: `<div>
			    <div class="crumbs n-tit">
			        <el-row>
			            <el-col :span="8"><div class="grid-content">警报内容</div></el-col>
			            <el-col :span="3"><div class="grid-content">视频截取</div></el-col>
			            <el-col :span="4"><div class="grid-content">相关人物图片</div></el-col>
			            <el-col :span="3"><div class="grid-content">查看监控</div></el-col>
			            <el-col :span="4"><div class="grid-content">备注</div></el-col>
			            <el-col :span="2"><div class="grid-content">操作</div></el-col>
			        </el-row>
			    </div>
			    <div class="ms-doc n-con">
			        <el-row v-for="item in system">
			            <el-col :span="8">
			                <div class="n-grid-content">{{item.message}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.video}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.imgs}}
			                </div>
			            </el-col>
			            <el-col :span="3">
			                <div class="n-grid-content">{{item.videos}}
			                </div>
			            </el-col>
			            <el-col :span="4">
			                <div class="n-grid-content">{{item.beizhu}}
			                </div>
			            </el-col>
			            <el-col :span="2">
			                <div class="n-grid-content">
			                    <el-button type="info">{{item.op}}</el-button>
			                </div>
			            </el-col>
			        </el-row>
			    </div>

			</div>`,
		data: function() {
            return {
                system: [{
                    message: 'Foo',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '已处理'
                }, {
                    message: 'Bar',
                    video: 'img/i.jpg',
                    imgs: 'images/1.jpg',
                    videos: 'mpg',
                    beizhu: 'tet',
                    op: '处理'
                }]
            }
        }
    }

    const router = new VueRouter({
            routes: [{
                path: '/notice',
                component: notice
            }, {
                path: '/history',
                component: history
            }, {
                path: '/video',
                component: video
            }, {
                path: '/blacklist',
                component: blacklist
            }, {
                path: '/device',
                component: device
            }, {
                path: '/counts',
                component: counts
            }, {
                path: '/system',
                component: system
            }, ]
        })
        // var Ctor = Vue.extend(Main);
        // new Ctor({ router },).$mount('#app');
    const app = new Vue({
        router,
        date: {
            name: 'linxin'
        },
        computed: {
            username() {
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            },
            onRoutes() {
                // return this.$route.path.replace('/','');
            }
        },
        methods: {
            handleCommand(command) {
                if (command == 'loginout') {
                    localStorage.removeItem('ms_username')
                        // this.$router.push('/login');
                }
            }
        }
    }).$mount('#app');
    </script>
</body>

</html>

```

## vue2中添加定时器：

一般是在beforeMount方法中添加
```
beforeMount:function(){

     //设置定时器，每3秒刷新一次
     setInterval(carInfoInterval,3000)

     var self = this;
     function carInfoInterval(){ 

      SessionToken = sessionStorage.getItem("Token");
      SessionSubUrl = sessionStorage.getItem("SubUrl");

      axios.get("/warn/vehicle",{
          baseURL: "http://192.168.0.109:9000/api/0.1/",
          data: {
                  SubUrlMapu: SessionSubUrl,
              },
          headers: {"Content-Type":"application/json","TOKEN": SessionToken}
          }).then(function(res){
          var carInfo = res.data.Data;
          self.carInfoObj = res.data.Data;    
        }).catch(function(){
      })
     }
     carInfoInterval();        
    },
```


## 父组件和子组件的通信

**父组件通过props向下传递数据给子组件，子组件通过props 接收父组件的数据**

```

<div id="app">
    <parent-component></parent-component>
</div>

<template id="parent-component">
    <child-component :childmsg="msg"></child-component>
</template>

<template id="child-component">
	<div>
		<h2>This is a child component</h2>
	    <button v-on:click="showParentComponentData">显示父组件的数据</button>
	</div>
    
</template>

<script src="js/vue.js"></script>
<script>
    Vue.component('parent-component', {
        template: '#parent-component',
        components: {
            'child-component': {
            	props:['childmsg'],
                template: '#child-component',
                methods: {
                    showParentComponentData: function() {
                        // alert(this.$parent.msg)
                        console.log(this.childmsg);
                    }
                }
            }
        },
        data: function() {
            return {
                msg: 'parent component message'
            }
        }
    })
    new Vue({
        el: '#app'
    })
</script>

```

**父组件访问子组件,通过 $children 或者 $refs 访问子组件；**

```
<div id="app">
    <parent-component></parent-component>
</div>

<template id="parent-component">
	<div>
		<child-component ></child-component>
    	<button v-on:click="showParentComponentData">显示子组件的数据</button>
	</div>
    
</template>

<template id="child-component">
	<div>
		<h2>This is a child component</h2>
	</div>
    
</template>

<script src="js/vue.js"></script>
<script>
    Vue.component('parent-component', {
        template: '#parent-component',
        components: {
            'child-component': {
                template: '#child-component',
                data: function() {
                    return {
                        msg: 'child component 111111'
                    }
                },
                methods: {
                 
                }
            }
        },
        data: function() {
            return {
                msg: 'parent component message'
            }
        },
        methods:{
        	showParentComponentData: function() {
                for (var i = 0; i < this.$children.length; i++) {
                    console.log(this.$children[i].msg)
                }
            }
        }
    })
    new Vue({
        el: '#app'
    })
</script>

```

**子组件访问父组件：使用$parent，子组件访问根组件：使用$root**

## 点击按钮方法出现  fns.apply is not a function

这是方法名不能和表单或者已经命名的变量一样，重新命名方法即可


## Vue type check failed for prop "currentPage". Expected Number, got String. 

分页时候，输入要跳转的页面，点击确定后跳转，输入的数字是string类型，但是要的是数字，所以报错了，需要把字符串的数组转换下用Number();


## 每个组件内部只能有一个根元素,不能几个标签并列写
```
错误写法:
<template>
  <div class="hello">
  </div>
  <div class="table">
  </div>
</template>

正确:
<template>
  <div class="hello">
    <div class="table">
    </div>
  </div>
  
</template>
```


## 路由嵌套

设置子路由的时候,必须在父路由组件中添加 <router-view></router-view> 标签

demo:

```
路由设置 index.js

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Hello',
      component: HelloWorld,
      children:[
        {
          path: 'test',
          name: 'test',
          component: test
        }
      ]
    },
  ]
})

=============================================
home.vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <p @click="go">跳转</p>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    go() {
      this.$router.push({path:'/home/test'})
    }
  }
}
</script>
================================================
test.vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

```
### vue使用element-ui 监听键盘事件
```
@keyup.native="(value) => changeInput(value,index,itemcell)">

```
