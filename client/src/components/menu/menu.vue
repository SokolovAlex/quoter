<template>
    <section class="section section--menu">
        <nav class="menu menu--francisco">
            <ul class="menu__list">
                <li v-for="route in routes" class="menu__item"
                    v-bind:class="{'menu__item--current' : $route.path === route.link}">
                    <router-link :to="route.link" class="menu__link">
                        <span class="menu__helper">{{ route.text }}</span>
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
                }]
            }
        },
        methods: { }
    }
</script>
