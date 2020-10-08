import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSideNav: null,
  },
  mutations: {
    toggleSideNav(state, val) {
      state.showSideNav = val;
    },
  },
  // actions: {},
  // modules: {},
});
