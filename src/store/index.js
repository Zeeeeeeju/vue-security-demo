import Vue from 'vue';
import Vuex from 'vuex';
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:state,
    mutations:mutations,
    actions:actions,
    plugins: [createPersistedState({
        storage: window.localStorage
    })]
})

export default store
