<template>
     <modal v-if="isOpenSignIn" @close="close()">
        <h3 slot="header">{{ !isOpenSignUp ? "Вход" : "Регистрация" }}</h3>

        <div slot="body">
            <div class="signin-form" v-if="!isOpenSignUp">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                </div>

                <button type="button" class="btn btn-outline-primary strech margin-y-xs" @click="signInVk()">
                    Вход через вкотакте
                    <i class="fa fa-vk" aria-hidden="true"></i>
                </button>

                <button type="button" class="btn btn-outline-primary strech margin-y-xs" @click="signInGoogle()">
                    Вход через google
                    <i class="fa fa-google" aria-hidden="true"></i>
                </button>

                <button type="button" aria-pressed="true" @click="openSignUp()" 
                    class="btn btn-link">У меня нет аккаунта.
                </button>
            </div>
            <div class="signup-form" v-if="isOpenSignUp">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" >
                </div>
                <div class="form-group">
                    <label for="password-repeat">Повторите пароль</label>
                    <input type="password" class="form-control" id="password-repeat" placeholder="Password" v-model="passwordRepeat" >
                </div>

                <button type="button" aria-pressed="true" @click="openSignin()" 
                    class="btn btn-link">У меня есть аккаунт.
                </button>
            </div>
        </div>

        <div slot="footer">
            <button type="button" aria-pressed="true" class="btn btn-secondary margin-x-sm" @click="close()">Отмена</button>
            <button type="button" aria-pressed="true" class="btn btn-primary" @click="signIn()" v-if="!isOpenSignUp">Войти</button>
            <button type="button" aria-pressed="true" class="btn btn-primary" @click="signUp()" v-if="isOpenSignUp"> Зарегистрироваться</button>
        </div>
    </modal>
</template>

<script>
    import { mapGetters } from 'vuex'
    import modal from '../modal/modal.vue'

    export default {
        data() {
            return { 
                email: '',
                password: '',
                passwordRepeat: ''
            }
        },
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
            openSignin() {
                this.$store.dispatch('openSignIn');
            },
            signIn() {
                console.log('------->', this);
                this.$store.dispatch('signIn', { });
            },
            signUp() {
                console.log('------->', this);
                this.$store.dispatch('signUp');
            },
            signInVk() {
                window.location.assign("/auth/vkontakte");
            },
            signInGoogle() {
                window.location.assign("/auth/google");
            }
        },
        components: {
            "modal": modal
        }
    }
</script>
