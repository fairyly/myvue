# vue开发中需要注意的问题

* 原文：https://juejin.im/post/5ad56d86518825556534ff4b

## 目录

- 组件里面, data必须是一个函数
- vue中$set的使用场景
- vue生命周期详解
- vue组件通信
- vue组件之keep-alive
- 生命周期函数/methods/watch里面不应该使用箭头函数
- methods/computed/watch

### 1.组件里面, data必须是一个函数
类比引用数据类型
Object是引用数据类型, 每个组件的data 都是内存的同一个地址,一个数据改变了其他也改变了;
那么用什么方法可以使每个组件的data相互独立,不受影响呢?
当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。
### 2.vue中$set的使用场景
#### 场景1:  
通过数组的下标去修改数组的值,数据已经被修改了,但是不触发updated函数,视图不更新,
```
export default {
    data () {
        return {
            items: ['a', 'b', 'c']
        };
    },
    updated () {
        console.log('数据更新', this.items[0]);
    },
    methods: {
        changeItem1 () {
            this.items[0] = 'x';
            console.log(111, this.items[0]);
        },
        changeItem2 () {
            this.$set(this.items, 0, 'x');
            console.log(222, this.items[0]);
        },
    }
};
```
执行changeItem1, 控制台打印 111 'x', 没有触发updated,视图不更新  
执行changeItem2, 控制台打印 222 'x',  数据更新 'x'; 触发updated,视图更新  
#### 场景2: vue中检测不到对象属性的添加和删除

```
data() {
     userProfile: {
        name: '小明',
    }
}
```
想要给userProfile加一个age属性
```
addProperty () {
     this.userProfile.age = '12';
     console.log(555, this.userProfile);
}
```
执行addProperty函数时,打印如下
```
555 { name: '小明', age: '12'}
```
但是没有触发updated, 视图未更新
改成下面这种
```
addProperty () {
      this.$set(this.userProfile, 'age', '12');
      console.log(666, this.userProfile);
 }
```
再次执行, 数据发生变化,  触发updated, 视图更新;
有时你想向已有对象上添加多个属性，例如使用 Object.assign() 或 _.extend() 方法来添加属性。
但是，添加到对象上的新属性不会触发更新。在这种情况下可以创建一个新的对象，让它包含原对象的属性和新的属性：
```
// 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```
这是vue中很典型的一个问题,使用的时候一定要注意!

#### 简单的解释一下原理:

vue在创建实例的时候把data深度遍历所有属性,并使用 Object.defineProperty 把这些属性全部转为 getter/setter。  
让 Vue 追踪依赖，在属性被访问和修改时通知变化。所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。  
当你在对象上新加了一个属性newProperty,当前新加的这个属性并没有加入vue检测数据更新的机制(因为是在初始化之后添加的),  
vue.$set是能让vue知道你添加了属性, 它会给你做处理

### 3.vue生命周期详解
####1. vue的生命周期
```
beforeCreate: 组件实例刚刚被创建,组件属性计算之前,如data属性  
created: 组件实例创建完成,属性已绑定,但是DOM还未完成,$el属性还不存在
beforeMount:模板编译/挂载之前
mounted: 模板编译/挂载之后
beforeUpdate: 组件更新之前
updated: 组件更新之后
activated: for keep-alive,组件被激活时调用
deactivated: for keep-alive,组件被移除时调用
beforeDestroy: 组件销毁前被调用
destoryed: 组件销毁后调用
```

ps:下面代码可以直接复制出去执行
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<script type="text/javascript" src="https://cdn.jsdelivr.net/vue/2.1.3/vue.js"></script>
<body>
    <div id="app">{{a}}</div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                a: 'vuejs',
            },
            beforeCreate: function() {
                console.log('创建前');
                console.log(this.a);
                console.log(this.$el);
            },
            created: function() {
                console.log('创建之后');
                console.log(this.a);
                console.log(this.$el);
            },
            beforeMount: function() {
                console.log('mount之前');
                console.log(this.a);
                console.log(this.$el);
            },
            mounted: function() {
                console.log('mount之后');
                console.log(this.a);
                console.log(this.$el);
            },
            beforeUpdate: function() {
                console.log('更新之前');
                console.log(this.a);
                console.log(this.$el);
            },
            updated: function() {
                console.log('更新完成');
                console.log(this.a);
                console.log(this.$el);
            },
            beforeDestroy: function() {
                console.log('组件销毁之前');
                console.log(this.a);
                console.log(this.$el);
            },
            destroyed: function() {
                console.log('组件销毁之后');
                console.log(this.a);
                console.log(this.$el);
            },
        })
    </script>
</body>
</html>
```
beforeCreated: el和data并未初始化
created: 完成data数据的初始化,el没有
beforeMount: 完成了el和data初始化
mounted: 完成挂载


打开命令行在命令行中输入vm.a = 'change';查看效果

### 4.vue组件通信
1.父组件给子组件传递数据
vue中使用props向子组件传递数据
1): 子组件在props中创建一个属性,用于接收父组件传过来的值
2): 父组件中注册子组件
3): 在子组件标签中添加子组件props中创建的属性
4): 把需要传给子组件的值赋给该属性
2.子组件向父组件传递数据
子组件主要通过事件传递数据给父组件
1), 子组件中需要以某种方式,例如点击事件的方法来触发一个自定义事件
2),将需要传的值作为$emit的第二个参数,该值将作为实参数传给相应自定义事件的方法
3),在父组件中注册子组件并在子组件标签上绑定自定义事件的监听
3.子组件向子组件传递数据
vue找那个没有直接子组件对子组件传参的方法,建议将需要传递数据的在组件,都合并为一个组件,如果一定需要子组件对子组件传参,可以先传到父组件,再传到子组件,为了方便开发,vue推出了一个状态管理工具vuex,可以啃方便的实现组件之间的参数传递
具体的实例代码如下:可以自行参考相关代码在编辑器中尝试
父组件向子组件传递数据
// 父组件向子组件传递数据
<!--
msg 是在data中(父组件)定义的变量
如果需要从父组件中获取logo的值,就需要使用props['msg'], 如30行
在props中添加了元素以后,就不需要在data中(子组件)中再添加变量了
-->
```
<template>
  <div>
    <child  @transferuser="getUser" :msg="msg"></child>  
    <p>用户名为:{{user}}(我是子组件传递给父组件的数据)</p>  
  </div>
</template>

<script>
    import child from './child.vue';
    export default {
        components: {
            child,
        },
        data() {
            return {
                user: '',
                msg: '我是父组件传给子组件的信息',
            };
        },
        methods: {
            getUser(msg) {
                this.user = msg;
                console.log(msg);
            },
        },
    };
</script>
```
子组件向父组件传递数据
// 子组件向父组件传递数据
<!--
1.@ : 是  v-on的简写
2.子组件主要通过事件传递数据给父组件
3.当input的值发生变化时,将username传递给parent.vue,首先声明了一个setUser,用change事件来调用setUser
4.在setUser中,使用了$emit来遍历transferUser事件,并返回this.username,其中transferuser是一个自定义事件,  
功能类似一个中转,this.username通过这个事件传递给父组件
-->
```
<template>
  <div>
      <div>{{msg}}</div>
      <span>用户名</span>
      <input v-model="username" @change='setUser'>向父组件传值</button>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '测试',
            };
        },
        props: {
            msg: {
                type: String,
            },
        },
        methods: {
            setUser() {
                this.$emit('transferuser', this.username);
            },
        },
    };
</script>
```
### 5.vue组件之keep-alive
项目中写vue也没注意到<keep-alive></keep-alive>这个组件,最近在深入的研究vue组件的生命周期函数,每一个函数都是干嘛的,  
然后其中有activated和deactivated这两个函数与<keep-alive></keep-alive>这个组件有关

activated: keep-alive组件激活时调用
deactivated: keep-alive组件停用时调用

#### keep-alive用法

<keep-alive>包裹动态组件时,会缓存不活动的组件实例,而不是销毁它们
<keep-alive>是一个抽象组件:它自身不会渲染一个DOM元素,也不会出现在父组件链中
当组件在<keep-alive>内被切换,它的activated和deactivated这两个生命周期钩子函数将会被对应执行

具体的实例如下

是一个简单的tab切换,可以尝试把<keep-alive>去掉之后,对比一下,然后就会发现它的好处
```
test.vue
<template>
    <div class="test">
        <div class="testNav">
            <div :class="{'selected':tab === 1,'testTitle':true}" @click="toTab(1)">标题一</div>
            <div :class="{'selected':tab === 2,'testTitle':true}"  @click="toTab(2)">标题二</div>
        </div>
        <div class="container">
            <keep-alive>
                <Test1 v-if="tab === 1">
                </Test1>
                <Test2 v-else>
                </Test2>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import Test1 from './test1.vue';
    import Test2 from './test2.vue';
    export default {
        data() {
            return {
                tab: 1,
            };
        },
        components: {
            Test1,
            Test2,
        },
        methods: {
            toTab(index) {
                this.tab = index;
            },
        },
    }
</script>

<style lang="less">
.test {
    width: 100%;
    .testNav {
        height: 60px;
        line-height: 60px;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        .testTitle {
            flex: 1;
            text-align: center;
        }
        .selected {
            color: red;
        }
    }
}
</style>
```
测试结果如下:
注意看一下页面和控制台输出的信息,可以更加直观的注意到<keep-alive>的作用及activated和deactivated这两个函数什么时候会被触发

打开页面,会出现下面这样


用setTimeout模拟请求后端接口的场景

点击title2,出现下面的情况

再次点击title1,出现下面的情况,你会发现从后端请求的数据会快速显示出来,但是如果你此时不用


```
test1.vue和test2.vue的相关代码如下:

test1.vue
<template>
  <div class="test1">
      test1
      {{testInfo1}}
  </div>
</template>

<script>
    export default {
        data() {
            return {
                testInfo1: '',
            };
        },
        activated() {
            console.log('测试1被激活');
        },
        deactivated() {
            console.log('测试1被缓存');
        },
        created() {
            setTimeout(() => {
                this.testInfo1 = '这是测试一的数据';
            }, 2000);
        },
    }
</script>

test2.vue
<template>
  <div>
      test2
      {{testInfo2}}
  </div>
</template>

<script>
    export default {
        data() {
            return {
                testInfo2: '',
            }
        },  
        activated() {
            console.log('测试2被激活');
        },
        deactivated() {
            console.log('测试2被缓存');
        },
        created() {
            setTimeout(() => {
                this.testInfo2 = '这是测试二的数据';
            }, 2000);
        },
    }
</script>
```
### 6. 生命周期函数/methods/watch里面不应该使用箭头函数
es6的箭头函数的出现,是我们可以用更少的代码实现功能,但是应该注意箭头函数和普通函数的最大区别是this的指向问题: 箭头函数的this指向函数所在的所用域,普通函数的this指向函数的调用者;
官方文档中特别提醒中已经指出这一点:
vue中生命周期函数, methods,  watch 自动绑定 this 上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着 你不能使用箭头函数来定义一个生命周期方法, 这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同
### 7.methods/computed/watch

#### methods VS computed
我们可以将同一个函数定义为methods或者computed,用这两种方式,得到的结果是相同的,  
不同的是computed是基于它们的依赖进行缓存的,计算属性只有在它相关的依赖发生改变时才重新求值;  
#### 适用场景:
重新计算开销很大的话,选computed; 不希望有缓存的选methods
#### computed vs watch
watch 有新旧值两个参数, 计算属性没有,但是计算属性可以从setter获得新值
#### 关于computed

对于计算属性要特别说明一点: vue的计算属性computed默认只有getter,需要使用getter的时候需要自己加一个setter

```
export default {
    data () {
        return {
            firstName: '张',
            lastName: '三',
        };
    },
    computed: {
        fullName() {
              return this.firstName + ' ' + this.lastName
        },
    },
    methods: {
        changeFullName () {
            this.fullName = '李 四';
        }
    },
};
```

其中computed里的代码完整写法是  
```
computed: {
   fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
   }    
},
```
执行 changeFullName 发现报错[Vue warn]: Computed property "fullame" was assigned to but it has no setter.  
我们需要给计算属性fullName添加一个setter
```
computed: {
   fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
  }    
},
```

### 总结

上述这些问题从vue官方文档中均能找到答案,当然想要更深入的理解为什么,还需要从vue源码分析入手;

作者：funnycoderstar
链接：https://juejin.im/post/5ad56d86518825556534ff4b
