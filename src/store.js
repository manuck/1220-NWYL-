import Vue from 'vue'
import Vuex from 'vuex'
import { firestore } from '@/services/FirebaseService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: '',
        user: '',
        admin: '',
        imgSrc: '',
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
        setAdmin(state, isad) {
            state.admin = isad
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
            user.getIdTokenResult().then(idTokenResult => {
                if(idTokenResult.claims.admin) {
                    commit('setAdmin', true)
                }
            })
            user.getIdToken().then(accessToken => {
                commit('setToken', accessToken)
            }).catch(function(error) {
                console.error('[getIdToken Error]',error)
            })
        },
        afterLogout({commit}, user) {
            commit('setUser', user)
            commit('setToken', user)
            commit('setAdmin', false)
        },
        addLog (aa) {
            aa.commit('addLog')
        }
    },
})
