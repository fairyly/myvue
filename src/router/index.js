import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[{
    path:'/index',component:require('../views/index')
  },{
    path:'/rank',component:require('../views/rank')
  },{
    path:'/ringtone',component:require('../views/ringtone')
  },{
    path:'/plist',component:require('../views/plist')
  },{
    path:'/singer',component:require('../views/singer')
  },{
    path:'/search',component:require('../views/search')
  },{
    path:'*',redirect:'/index'
  }]
})


export default router;
