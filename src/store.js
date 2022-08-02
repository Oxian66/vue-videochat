import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: ''
  },
  actions: {
    setName(context, data){
      context.commit('setName', data)
  }
},
  getters: {
    getName(state) {
      return state.name;
    }
  },
  mutations: {
    setName(state, payload) {
      console.log(state.name);
        state.name = payload      
    }
  }
})