<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <headlogo></headlogo>
    <hello></hello>
    <head-nav></head-nav>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!--<conlist></conlist> 原直接加载组件，后改为路由-->
  </div>
</template>

<script>
import Hello from './components/Hello'
import Headlogo from './components/Headlogo'
import HeadNav from './components/HeadNav'
import Conlist from './components/Conlist'
export default {
  name: 'app',
  components: {
    Hello,Headlogo,HeadNav,Conlist
  }
}
</script>

<style>
body{
  margin:0px;
  padding:0px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top:40px;
}
.main{
  margin-top: 5px;
}
</style>
