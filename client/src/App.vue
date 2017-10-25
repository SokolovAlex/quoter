<template>
    <div class="container">
        <q-header></q-header>
        
        <q-menu></q-menu>

        <router-view></router-view>
    </div>
</template>

<script>
import Menu from './components/menu/menu.vue';
import Header from './components/header/header.vue';

export default {
    data() {
        return {
           
        }
    },
    computed: {
     
    },
    methods: {
     
    },
    components: {
        "q-menu": Menu,
        "q-header": Header
    }
}
</script>

<style>
#app {
 
}
</style>
