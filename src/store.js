import Vue from 'vue'
import Vuex from 'vuex'
import { firestore } from '@/services/FirebaseService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		accessToken: '',
    user: '',
    vueName: {
      page: '',
      userid: '',
      time: ''
     }
  },
  mutations: {
    addLog (state) {
      console.log('mmmmmmmmmmmmm')
      console.log(state.vueName)
      firestore.collection('LOG').add(state.vueName).then(() => {
        console.log('added LOG!!')
      })
    }
  },
  actions: {
    addLog (aa) {
      console.log('aaaaaaaaaaaaa')
      aa.commit('addLog')
    }
  }
})
