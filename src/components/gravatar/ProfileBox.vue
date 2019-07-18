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
            <img :src="gravatarURL"/>
            <router-link to="portfolio" class="button" style="color:black !important;">로그아웃 하기</router-link>
        </div>
        <div class="card-content-wrapper" v-else>
            <router-link to="portfolio" class="button" style="color:black !important;">로그인 하기</router-link>
        </div>
    </div>
</template>

<script>
import store from '@/store'
let md5 = require('md5');
export default {
    name: "ProfileBox",
    computed: {
        gravatarURL() {
            return `http://www.gravatar.com/avatar/${md5(store.state.user.email)}?s=200?=retro`
        }
    }
}
</script>

<style>

</style>


