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
                <input v-model="score" id="myscore" type="number" min="0" max="5" value="5" />
                <div class="submit-area">
                <button id="formButton" @click="postComment(comment,score); clear();" class="form-button" type="button">제출</button>
                </div>
            </v-form>
            <br><hr><br>
            <div class="modal-comment" id="commentSection" :key="$store.state.menucomments.length">
                <!-- 댓글창 -->
                <!-- 이곳에 댓글창 구현해 주세요 -->
                <li v-for="i in $store.state.menucomments.length" style="margin-top:20px">{{ $store.state.menucomments[i-1] }}<button class="form-button" @click="idconsole(i); deletecomment(i);" style="position: absolute; right: 0;">삭제</button></li>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import store from '@/store.js'
import { firestore } from '@/services/FirebaseService'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
// modalrefresh($store.state.menuid)
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
        document.getElementById("myscore").value = 5;
    },
    methods: {
        postComment(comment, score) {
            console.log('postComment:', comment, score)
            return firestore.collection('menus').doc(store.state.menuid).collection("comments").add({
                comment,
                score,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            }).then(function(docRef) {
                 console.log("Document written with ID: ", docRef.id);
                 console.log()
                 firestore.collection('menus').doc(store.state.menuid).collection("comments").doc(docRef.id).update({
                     id: docRef.id
                })
                console.log(store.state.menucomments)
                // store.state.menuid.prepend(docRef.id)
                // store.state.menucomments.prepend(comment)
            })
        },
        addcomment(comment, id) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(comment);
            var jbBtn = document.createElement( 'button' );
            var jbBtnText = document.createTextNode( '삭제' );

            node.appendChild(textnode);
            jbBtn.appendChild( jbBtnText );

            document.getElementById("commentSection").prepend(node)
            // document.getElementById("commentSection").prepend( jbBtn );
        },
        clear () {
            this.comment = ''
            this.score = 5
        },
        idconsole(i){
            console.log(store.state.commentId[i-1])
        },
        deletecomment(i) {
            db.collection("menus").doc(store.state.menuid).collection("comments").doc(store.state.commentId[i-1]).delete().then(function() {
                console.log("Comment successfully deleted!");

            }).catch(function(error) {
                console.error("Error removing Comment: ", error);
            });
        },
        modalrefresh(a) {
            location.href="#"
            store.state.menuid = a
        },
        forceUD(){
            this.$forceUpdate
        }
    }
}
</script>

<style lang="scss">
@import './MenuModal.scss'
</style>


