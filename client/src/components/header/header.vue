<template>
    <div class="header margin-y-sm">
        <h2 class="q-title">Цитатник</h2>
        
        <div class="sign-in">

            <div v-if="user">
                <a href="/logout" @click="signout()" class="signout">Выйти</a>
                <img :src="user.avatar" class="avatar" />
            </div>

            <div v-if="!user">
                <a href="#" @click="signin()">Вход</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: window.user
            };
        },
        methods: {
            signin() {
                this.$store.dispatch('openSignIn');
            },
            signout() {
                this.$store.dispatch('openSignIn');
            }
        }
    }
</script>
