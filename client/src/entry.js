import Vue from 'vue'
import Vuex from 'vuex'
import createRouter from './router'
import App from './app.vue'
import Login from './routes/Login.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {}
});

const router = createRouter();

const app = new Vue({
    el: "app",
    store,
    router,
    render: h => h(App)
})