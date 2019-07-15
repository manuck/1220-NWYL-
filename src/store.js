import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		accessToken: '',
		user: ''
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setToken(state, accessToken) {
      state.accessToken = accessToken
    }
  },
  actions: {
    getUser({commit}, user){
      commit('setUser', user)
      user.getIdToken().then(accessToken => {
        commit('setToken', accessToken)
      }).catch(function(error) {
        console.error('[getIdToken Error]',error)
      })
    }
  }

})
