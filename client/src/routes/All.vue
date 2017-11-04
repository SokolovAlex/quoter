
<template>
    <section class="section">
       All
        <div class="sign-in" @click="signin()"><a href="#">Вход</a></div>
    </section>
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

<style scoped>
    
</style>