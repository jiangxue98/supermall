import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store.js'
import '@/assets/css/base.css'
import '@/assets/css/reset.css'
import '@/assets/js/antd-components.js'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')