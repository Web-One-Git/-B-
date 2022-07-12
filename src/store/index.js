import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // menu菜单是否收缩  true为后收缩  false为展开
    collapsed: false,
  },
  mutations: {
    changeCollapsed : (state)=>{
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    changeCollapsed : (ctx)=>{
      ctx.commit('changeCollapsed');
    }
  },
  modules: {
  },
});
