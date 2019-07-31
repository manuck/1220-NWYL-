import Vue from 'vue'
import Vuex from 'vuex'
import { firestore } from '@/services/FirebaseService'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: '',
        user: '',
        imgSrc: '',
        menuid: '',
        menuname: '',
        menuimg: '',
        menutag: [],
        menucomments: [],
        commentId: [],
        commentScore: 0,
        imgToDB: {
            imglink: '',
            user_email: '',
        },
        vueName: {
            page: '',
            userid: '',
            time: ''
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, accessToken) {
           state.accessToken = accessToken
        },
        addLog (state) {
            firestore.collection('LOG').add(state.vueName).then(() => {
                console.log('added LOG!!')
            })
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
        },
        afterLogout({commit}, user) {
            commit('setUser', user)
            commit('setToken', user)
        },
        addLog (aa) {
            aa.commit('addLog')
        }
    },
})
