import axios from 'axios';

export default {
    signin({}) {
        return axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        });
    },

    signup({}) {
        return axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        });
    },

    signout({}) {
        return axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        });
    },

    signInGoogle() {
        return axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        });
    }
}