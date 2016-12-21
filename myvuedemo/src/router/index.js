import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
	routes:[
    {
     path:'/index',component:require('../views/index')
    },{
      path:'*',redirect:'/index'
    }
  ]
})


export default router;
