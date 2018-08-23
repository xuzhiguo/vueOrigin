import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {},
    },
    mutations: {
        setUserInfo(state, payload) {
            state.user = payload.user;
        }
    }
});

export default store;