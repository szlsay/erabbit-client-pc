import { createStore } from 'vuex'

const moduleA = {
  namespaced: true,
  state: {
    name: 'moduleA'
  },
  getters: {
    newName(state){
      return state.name+'getters'
    }
  },
  mutations: {
    updateName(state){
      state.name = 'moduleA-update'
    }
  },
  actions: {
    updateName(ctx){
      setTimeout(() => {
        ctx.commit('updateName')
      },  300);
    }
  }
}

const moduleB = {
  namespaced: false,
  state: {
    name: 'moduleB'
  },
  getters: {
    newName(state){
      return state.name+'getters'
    }
  },
  mutations: {
    updateName(state){
      state.name = 'moduleB-update'
    }
  },
  actions: {
    updateName(ctx){
      setTimeout(() => {
        ctx.commit('updateName')
      },  300);
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})
