import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'st'
  },
  getters: {
    newName(){
      return 'stname'
    }
  },
  mutations: {
    updateName(state){
      state.name = 'stupdate'
    }
  },
  actions: {
    updateName(ctx){
      setTimeout(() => {
        ctx.commit('updateName')
      }, 3000);
    }
  },
  modules: {
  }
})
