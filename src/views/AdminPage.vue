<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <span v-if="$store.state.user"></span>
            <div style="display: flex; justify-content:center; align-items:center; height: 100%;" :key="isadmin">
                <!-- v-if="(isadmin==true&&noadmin==false&&islogin==true)" -->
                <v-card
                v-cloak
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
                        <v-card-title class="align-center fill-height">Add Admin Email</v-card-title>
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
                    </v-card-actions>
                </v-card>

                <!-- 현재 관리자로 로그인이 안되어있을 경우 로그인 화면이 나오게 -->
               <!-- v-if="(noadmin==true&&isadmin==false&&islogin==true)||(noadmin==false&&isadmin==false)" -->
                <v-card 
                
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
                        <v-card-title class="align-center fill-height">Admin Login</v-card-title>
                    </v-img>

                    <v-card-text>
                        <v-form class="pa-3 pt-4">
                            <v-text-field
                                v-model="email"
                                label="Admin Email"
                                type="email"
                                required
                            ></v-text-field> 
                        </v-form>
                        <v-form class="pa-3 pt-4">
                            <v-text-field
                                v-model="password"
                                label="Password"
                                type="password"
                                required
                            ></v-text-field> 
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn @click="createAdmin(admin_email)">Admin Login</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
      </div>
    </div>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'
import store from '@/store'
import { truncate } from 'fs';

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
      password: '',
    //   isadmin: false,
    //   noadmin: false,
    //   islogin: true
    }),
    methods: {
        createAdmin(email) {
            const result = FirebaseService.createAdmin(email).then( () => {
                this.$data.admin_email = ''
            })
        }
    },
    // mounted() {                                                   주석 부분 다시 생각해보자
    //     this.islogin = true
    // },
    // beforeUpdate() {
    //     this.islogin = true
    //     if(store.state.admin) {
            
    //         this.isadmin = true
    //         this.noadmin = false
    //     }
    //     else {
    //         this.isadmin = false
    //         this.noadmin = true
    //     } 
    // }
}
</script>

<style lang="scss">
@import './MenuPage.scss';
[v-cloak] {
    display: none;
}
</style>
