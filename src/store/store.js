import Vue from 'vue';
import Vuex from 'vuex';
import markers from './modules/markers/markers.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    markers
  }
});
