<template>
    <div class="header margin-y-sm">
        <h2 class="q-title">Цитатник</h2>
        <div class="sign-in" @click="signin()"><a href="#">Вход</a></div>
    </div>
</template>

<script>
    export default {
        methods: {
            signin() {
                this.$store.dispatch('openSignIn');
            }
        }
    }
</script>
