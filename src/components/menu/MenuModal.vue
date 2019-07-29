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
            <v-form>
                <v-text-field
                    v-model="comment"
                    :counter="100"
                    label="comment"
                    required
                ></v-text-field>
                <input v-model="score" type="number">
                <div class="submit-area">
                <button id="formButton" @click="postComment(comment,score); addcomment(comment)" class="form-button" type="button">제출</button>
                </div>
            </v-form>

            <div class="modal-comment" id="commentSection">
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
import { firestore } from '@/services/FirebaseService'

const db = firebase.firestore();

export default {
    name: 'MenuModal',
    props: {
        comment: {type: String},
		score: {type: Number},
    },
    data() {
        return {
            title: '',
        }
    },
    mounted() {

    },
    methods: {
        postComment(comment, score) {
            return firestore.collection('menus').doc(store.state.menuid).collection("comments").add({
                comment,
                score,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            })
        },
        addcomment(comment) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(comment);
            node.appendChild(textnode);
            document.getElementById("commentSection").appendChild(node);
        }
    }
}
</script>

<style lang="scss">
@import './MenuModal.scss'
</style>


