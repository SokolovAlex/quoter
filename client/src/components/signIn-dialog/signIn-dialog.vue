<template>
     <modal v-if="isOpenSignIn" @close="close()">
        <h3 slot="header">{{ !isOpenSignUp ? "Вход" : "Регистрация" }}</h3>

        <div slot="body">
            <div class="signin-form" v-if="!isOpenSignUp">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>

                <button type="button" class="btn btn-outline-primary strech margin-y-xs" aria-pressed="true">
                    Вход через вкотакте
                    <i class="fa fa-vk" aria-hidden="true"></i>
                </button>

                <button type="button" aria-pressed="true" @click="openSignUp()" 
                    class="btn btn-link">У меня нет аккаунта.
                </button>
            </div>
            <div class="signup-form" v-if="isOpenSignUp">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="password">Повторите пароль</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>

                <button type="button" aria-pressed="true" @click="signin()" 
                    class="btn btn-link">У меня есть аккаунт.
                </button>
            </div>
        </div>

        <div slot="footer">
            <button type="button" aria-pressed="true" class="btn btn-secondary margin-x-sm" @click="close()">Отмена</button>
            <button type="button" aria-pressed="true" class="btn btn-primary">{{ !isOpenSignUp ? "Войти" : "Зарегистрироваться" }}</button>
        </div>
    </modal>
</template>

<script>
    import { mapGetters } from 'vuex'
    import modal from '../modal/modal.vue'

    export default {
        computed: mapGetters({
            user: 'user',
            isOpenSignIn: 'isOpenSignIn',
            isOpenSignUp: 'isOpenSignUp'
        }),
        methods: {
            close() {
                 this.$store.dispatch('closeSignIn');
            },
            openSignUp() {
                this.$store.dispatch('openSignUp');
            },
            signin() {
                this.$store.dispatch('openSignIn');
            }
        },
        components: {
            "modal": modal
        }
    }
</script>
