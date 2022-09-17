import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
  },
})

export default store
