<template>
    <div class="container">
        <q-header></q-header>
        
        <q-menu></q-menu>

        <router-view></router-view>

        <signin-dialog></signin-dialog>
    </div>
</template>

<script>
import Menu from './components/menu/menu.vue';
import Header from './components/header/header.vue';
import SignIn from './components/signin-dialog/signin-dialog.vue';

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
        "q-header": Header,
        "signin-dialog": SignIn
    }
}
</script>
