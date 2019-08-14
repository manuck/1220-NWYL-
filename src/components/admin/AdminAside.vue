<template>
    <div class="admin-aside">
        <div class="admin-aside-flex">
            <div class="admin-aside-title">
                ADMIN PAGE
            </div>
            <div class="admin-aside-profile">
                <div class="admin-aside-profile-image"/>
                <div class="admin-aside-profile-info">
                    {{$store.state.user.displayName}}
                </div>
                <button @click="signOut" class="button">로그아웃 하기</button>
            </div>
            <div class="admin-aside-menu">
                <a href="#admin-dashboard" class="admin-aside-li">
                    <span>💻</span>대시 보드
                </a>
                <a href="#admin-userinfo" class="admin-aside-li">
                    <span>🙍</span>회원 정보
                </a>
                <a href="#admin-menuinfo" class="admin-aside-li">
                    <span>🍛</span>메뉴 정보
                </a>
                <a href="#admin-weeklymenu" class="admin-aside-li">
                    <span>📆</span>주간 메뉴
                </a>
                <a href="#admin-pagelog" class="admin-aside-li">
                    <span>📰</span>페이지 기록
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import LoginModal from '@/components/authenticate/LoginModal'
import FirebaseService from '@/services/FirebaseService'
import store from '@/store'

let md5 = require('md5')

export default {
    name: "AdminAside",
    components: {
        LoginModal,
    },
    mounted() {
        let pf = document.querySelector('.admin-aside-profile-image')
        pf.style.backgroundImage = `url(${this.gravatarURL()})`
    },
    methods: {
        showContent(e) {
            this.$emit('state', e.target.id)
        },
        signOut() {
            FirebaseService.signOut()
        },
        gravatarURL() {
            return `http://www.gravatar.com/avatar/${md5(store.state.user.email)}?s=150&d=retro`
        }
    },
}
</script>

<style lang="scss">
@import './AdminAside.scss';
</style>
