import Vue from 'vue'
import Vuex from 'vuex'
import createRouter from './router'
import store from './store/store'
import App from './app.vue'

const router = createRouter();

const app = new Vue({
    el: "app",
    store,
    router,
    render: h => h(App)
})