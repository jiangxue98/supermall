import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
        path: '/',
        component: () =>
            import ('../views/Index')
    },
    {
        path: '/index',
        name: 'index',
        redirect: 'hidoc/index',
        component: () =>
            import ('../views/Index'),
        children: [{
                path: 'hidoc/index',
                name: 'hidoc',
                component: () =>
                    import ('../views/hidoc')
            },
            {
                path: 'appStore/index',
                name: 'appStore',
                component: () =>
                    import ('../views/appStore')
            },
        ]
    }
]
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})