<template>
    <section class="section section--menu">
        <nav class="menu menu--miranda">
            <ul class="menu__list">
                <li v-for="route in routes">
                    <router-link :to="route.link" class="menu__link"
                        v-bind:class="{'menu__item--current' : $route.path === route.link}">
                        {{ route.text }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                routes: [{
                    text: "главная",
                    link: "/"
                }, {
                    text: "личные",
                    link: "/private"
                }, {
                    text: "по авторам",
                    link: "/by-writers"
                }, {
                    text: "по книгам",
                    link: "/by-books"
                }, {
                    text: "по группам",
                    link: "/by-singers"
                }, {
                    text: "По фильмам",
                    link: "/by-cinema"
                }, {
                    text: "все",
                    link: "/all"
                }, {
                    text: "вход",
                    link: "/signin"
                }]
            }
        },
        methods: { }
    }
</script>

<style scoped>
    
</style>