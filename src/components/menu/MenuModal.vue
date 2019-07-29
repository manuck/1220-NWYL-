<template>
    <div id="menu-modal" class="modal-wrapper">
        <a href="#" class="modal-back"/>
        <div class="modal-box">
            <div class="modal-header">
                <!-- 밑의 메뉴 이름에 변수 넣어주세요 -->
                <span class="modal-title">{{ $store.state.menuname }}</span>
                <!-- <span class="modal-title">{{ doc.data().name }}</span> -->
                <a href="#" class="modal-close">&times;</a>
            </div>
            <div class="modal-content">
                <div class="modal-image">
                    <!-- 밑의 src에 주소 넣어주세요 -->
                    <img :src="$store.state.menuimg" alt="modal_detail_image">
                </div>
                <div class="modal-info">
                    <!-- 이곳에 메뉴 정보를 넣어주세요 -->
                    메뉴 정보
                    <li v-for="item in $store.state.menutag">{{ item }}</li>
                </div>
            </div>
            <div class="modal-comment">
                댓글창
                <!-- 이곳에 댓글창 구현해 주세요 -->
                <li v-for="comment in $store.state.menucomments">{{ comment }}</li>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import store from '@/store.js'


const db = firebase.firestore();

export default {
    name: 'MenuModal',
    props: {
        name: {type: String},
        // menu: Object,
    },
    data() {
        return {
            com:[],
            title: '',
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
@import './MenuModal.scss'
</style>


