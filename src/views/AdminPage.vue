<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <div style="display: flex; justify-content:center; align-items:center; height: 100%;">

                <!-- 로그인된 상태 (관리자) -->
                <v-card
                    v-if="($store.state.admin===true)"
                    class="mx-auto"
                    :flat="flat"
                    :loading="loading"
                    :outlined="outlined"
                    :elevation="elevation"
                    :raised="raised"
                    :width="width"
                    :height="height"
                    @keyup.enter="createAdmin(admin_email)"        
                >
                    <v-img
                        class="white--text"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    <v-card-title class="align-center fill-height">관리자로 등록하기</v-card-title>
                    </v-img>

                    <v-card-text>
                        <v-form class="pa-3 pt-4">
                            <v-text-field
                                v-model="admin_email"
                                label="Create Admin Email"
                                type="email"
                                required
                            ></v-text-field> 
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn @click="createAdmin(admin_email)">Make Admin</v-btn>
                        <v-btn @click="showList">User List</v-btn>
                    </v-card-actions>
                </v-card>

                <!-- 로그인된 상태 (일반회원) -->
                <v-card
                v-if="($store.state.admin===false)"
                    class="mx-auto"
                    :flat="flat"
                    :loading="loading"
                    :outlined="outlined"
                    :elevation="elevation"
                    :raised="raised"
                    :width="width"
                    :height="height"          
                >
                    <v-img
                        class="white--text"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    <v-card-title class="align-center fill-height">관리자 계정이 아닙니다!</v-card-title>
                    </v-img>

                    <v-card-actions>
                        <v-btn @click="signOut">Logout</v-btn>
                    </v-card-actions>
                </v-card>


                <!-- 로그인 안된 상태 -->
                <v-card 
                v-if="($store.state.admin==='')"
                class="mx-auto"
                :flat="flat"
                :loading="loading"
                :outlined="outlined"
                :elevation="elevation"
                :raised="raised"
                :width="width"
                :height="height"
                @keyup.enter="loginWithEmailAndPassword(email, password)"
                >
                    <v-img
                        class="white--text"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    <v-card-title class="align-center fill-height">관리자 계정으로 로그인하세요</v-card-title>
                    </v-img>

                    <v-card-text>
                        <v-form class="pa-3 pt-4" >
                            <v-text-field
                                v-model="email"
                                label="Admin Email"
                                type="email"
                                required
                            ></v-text-field> 
                            <v-text-field
                                    v-model="password"
                                    label="Password"
                                    type="password"
                                    required
                            ></v-text-field> 
                        </v-form>
                            

                    </v-card-text>

                    <v-card-actions>
                        <v-btn @click="loginWithEmailAndPassword(email, password)">Admin Login</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
      </div>
    </div>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'
import store from '@/store'
import { Promise } from 'q';

export default {
    name: 'AdminPage',
    data: () => ({
      flat: false,
      media: true,
      loading: false,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 400,
      height: undefined,
      admin_email: '',
      email: '',
      password: ''
    }),
    methods: {
        createAdmin(email) {
            const result = FirebaseService.createAdmin(email).then( () => {
                this.$data.admin_email = ''
            })
        },
        signOut() {
            FirebaseService.signOut();
            this.$data.email = ''
            this.$data.password = ''
        },
        loginWithEmailAndPassword(email, password) {
            const result = FirebaseService.signInWithEmailAndPassword(email, password)
        },
        showList() {
            const result = FirebaseService.getUserList()
            //alert(result)
            
        }

    }
}
</script>

<style lang="scss">
@import './MenuPage.scss';
</style>
