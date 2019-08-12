<template>
    <div id="admin-userinfo">
        <div class="admin-fullbox">
            <div class="admin-box-header">
                <div class="admin-header-title">
                    회원 정보
                </div>
            </div>
            <div class="admin-box-content">
                <!-- <v-card
                    v-if="($store.state.admin===true)"
                    class="admin-userinfo-createadmin"
                    @keyup.enter="createAdmin(admin_email)"        
                >
                    <v-img
                        class="admin-userinfo-img"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <div class="admin-userinfo-content">
                            <v-card-title class="align-center admin-userinfo-content-title">관리자로 등록하기</v-card-title>
                            <v-form class="admin-userinfo-content-form">
                                <v-text-field
                                    v-model="admin_email"
                                    label="Create Admin Email"
                                    type="email"
                                    required
                                    color="#f7f7f7"
                                    dark
                                ></v-text-field> 
                            </v-form>
                        </div>
                    </v-img>

                    <v-card-actions>
                        <v-btn @click="createAdmin(admin_email)">Make Admin</v-btn>
                        <v-btn @click="signOut">Logout</v-btn>
                    </v-card-actions>
                </v-card> -->
                <component v-bind:is="Compo" >
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'
import store from '@/store'
import UserList from '@/components/admin/UserList'

export default {
    name: "AdminUserInfo",
    data: () => ({
      width: 400,
      height: undefined,
      admin_email: '',
      email: '',
      password: '',
      Compo: 'UserList'
    }),
    components: {
        UserList,
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
        // showList() {        
        //     this.Compo = 'UserList'
        // }
    }
}
</script>

<style lang="scss">
@import './AdminUserInfo.scss';
</style>
