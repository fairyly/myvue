import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import users from './views/users/users.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '门店管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/storelist', component: Table, name: '门店列表' },
            { path: '/storefloor', component: Form, name: '门店层级' },
            { path: '/usergroup', component: user, name: '门店分组' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '业绩分析',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/targetmanage', component: Page4, name: '指标管理' },
            { path: '/memberanalysis', component: Page5, name: '会员分类' },
            { path: '/distribanalysis', component: Page5, name: '分布分析' }
        ]
    },
    /*{
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },*/
    {
        path: '/',
        component: Home,
        name: '会员分析',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/memberphoto', component: echarts, name: '会员画像' },
            { path: '/worthanalysis', component: echarts, name: '价值分析' },
            { path: '/memberdistribanalysis', component: echarts, name: '分布分析' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统配置',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/usermanage', component: users, name: '成员管理' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;