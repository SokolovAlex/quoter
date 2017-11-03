<template>
     <modal v-if="isOpenSignIn" @close="close()">
        <h3 slot="header">custom header</h3>

        <h3 slot="body">custom body</h3>
    </modal>
</template>

<script>
    import { mapGetters } from 'vuex'
    import modal from '../modal/modal.vue'

    export default {
        computed: mapGetters({
            user: 'user',
            isOpenSignIn: 'isOpenSignIn'
        }),
        methods: {
            close() {
                 this.$store.dispatch('closeSignIn');
            }
        },
        components: {
            "modal": modal
        }
    }
</script>
