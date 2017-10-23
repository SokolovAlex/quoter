import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './routes/Login.vue'
import Dashboard from './routes/Dashboard.vue'
import ByBooks from './routes/ByBooks.vue'
import ByWriters from './routes/ByWriters.vue'
import BySingers from './routes/BySingers.vue'
import Private from './routes/Private.vue'
import All from './routes/All.vue'
import ByCinema from './routes/ByCinema.vue'

const createRouter = () => {
    Vue.use(VueRouter)

    return new VueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            { path: '/', component: Dashboard },
            { path: '/all', component: All },
            { path: '/by-cinema', component: ByCinema },
            { path: '/signin', component: Login },
            { path: '/private', component: Private },
            { path: '/by-singers', component: BySingers },
            { path: '/by-books', component: ByWriters },
            { path: '/by-writers', component: ByBooks }
        ]
    })
};

export default createRouter;