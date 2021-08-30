import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import iView from 'iview' //引入ivew库
import 'iview/dist/styles/iview.css' // 使用 CSS

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () =>
                import (
                    '../views/About.vue')
        }
    ]
})

export default router