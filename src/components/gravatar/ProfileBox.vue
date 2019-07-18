<template>
    <div class="card-wrapper">
        <div class="card-title">
            <span v-if="$store.state.user">
                {{$store.state.user.displayName}} 님의 프로필
            </span>
            <span v-else>
                로그인 해 주세요
            </span>
        </div>
        <div class="card-bar"/>
        <div class="card-content-wrapper" v-if="$store.state.user">
            <div style="margin: -12px;">
                <img :src="gravatarURL"/>
            </div>
            <LoginModal/>
        </div>
        <div class="card-content-wrapper" v-else>
            <LoginModal/>
        </div>
    </div>
</template>

<script>
import LoginModal from '@/components/authenticate/LoginModal'
import store from '@/store'
let md5 = require('md5');

export default {
    name: "ProfileBox",
    components: {
        LoginModal,
    },
    computed: {
        gravatarURL() {
            return `http://www.gravatar.com/avatar/${md5(store.state.user.email)}?s=200?=retro`
        }
    }
}
</script>

<style>

</style>


