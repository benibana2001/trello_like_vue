import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      token: null,
      userId: null,
    },
    board: {
      lists: [],
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
