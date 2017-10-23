<template>
    <div class="container">
        <h2>Цитатник</h2>

        <MainMenu></MainMenu>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import MainMenu from './components/MainMenu/MainMenu.vue';

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
        MainMenu
    }
}
</script>

<style>
#app {
 
}
</style>
