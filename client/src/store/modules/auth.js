import Vue from 'vue'
import api from '../../api/signin'

const types = {
    SIGN_IN: 'SIGN_IN',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_OUT: 'SIGN_OUT',
    SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
    SIGN_UP: 'SIGN_UP',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    OPEN_DIALOG: 'OPEN_DIALOG',
    CLOSE_DIALOG: 'CLOSE_DIALOG'
}

const state = {
    user: {},
    isOpenSignIn: false
}

const getters = {
    user: state => state.user,
    isOpenSignIn: state => state.isOpenSignIn
}

// actions
const actions = {
    openSignIn({ commit }) {
        return commit('OPEN_DIALOG');
    },
    closeSignIn({ commit }) {
        return commit('CLOSE_DIALOG');
    }
}

// mutations
const mutations = {
    [types.OPEN_DIALOG](state) {
        return Vue.set(state, 'isOpenSignIn', true);
    },

    [types.CLOSE_DIALOG](state) {
        return Vue.set(state, 'isOpenSignIn', false);
    },

    [types.SIGN_IN](state) {
        return Vue.set(state, 'isOpenSignIn', true);
    },

    [types.SIGN_IN](state) {
        return Vue.set(state, 'isOpenSignIn', true);
    },

    [types.SIGN_IN](state) {
        return Vue.set(state, 'isOpenSignIn', true);
    },

    [types.SIGN_IN](state) {
        return Vue.set(state, 'isOpenSignIn', true);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}