<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-wrapper">
            <!-- 로그인된 상태 (관리자) -->
            <AdminPageView v-if="($store.state.admin===true)"/>
            <!-- <v-card
                v-if="($store.state.admin===true)"
                class="mx-auto"
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
                    <v-btn @click="signOut">Logout</v-btn>
                </v-card-actions>
            </v-card> -->

            <!-- 로그인된 상태 (일반회원) -->
            <div v-if="$store.state.admin===false" class="admin-login">
                <div class="admin-login-box">
                    <div class="admin-login-title">
                        관리자 계정이 아닙니다!
                    </div>
                    <div class="admin-login-content">
                        <v-btn @click="signOut">Logout</v-btn>
                    </div>
                </div>
            </div>
            <!-- <v-card
            v-if="($store.state.admin===false)"
                class="mx-auto"
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
            </v-card> -->


            <!-- 로그인 안된 상태 -->
            <!-- <v-card 
            v-if="($store.state.admin==='')"
            class="mx-auto"
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
            </v-card> -->
            <div v-if="$store.state.admin===''" class="admin-login">
                <div class="admin-login-box">
                    <div class="admin-login-title">
                        관리자 계정으로 로그인하세요.
                    </div>
                    <div class="admin-login-content">
                        <LoginModal/>
                    </div>
                </div>
            </div>
            <!-- 유저 리스트가 나오는 영역 임시로 v-bind:members="members" member="member" -->
            <component v-bind:is="Compo" >
            </component>
        </div>
    </div>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'
import store from '@/store'
import UserList from '../components/admin/UserList'
import AdminPageView from '@/components/admin/AdminPageView'
import LoginModal from '@/components/authenticate/LoginModal'

export default {
    name: 'AdminPage',
    data: () => ({
      width: 400,
      height: undefined,
      admin_email: '',
      email: '',
      password: '',
      Compo: ''
    }),
    components: {
        UserList,
        AdminPageView,
        LoginModal,
    },
    methods: {
        // 로그인
        loginWithEmailAndPassword(email, password) {
            const result = FirebaseService.signInWithEmailAndPassword(email, password)
        },
        // 로그아웃
        signOut() {
            FirebaseService.signOut();
            this.$data.email = ''
            this.$data.password = ''
        },
        // UserList.vue 컴포넌트 활성화
        showList() {        
            this.Compo = 'UserList'
        }
    }
}
</script>

<style lang="scss">
@import './AdminPage.scss';
</style>
