import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        zen: {
            loading: false
        }
    }
});

const app = new Vue({
    el: "app",
    store,
    render: h => h(App)
})