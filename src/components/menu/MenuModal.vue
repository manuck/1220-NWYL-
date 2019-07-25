<template>
    <div id="menu-modal" class="modal-wrapper">
        <a href="#" class="modal-back"/>
        <div class="modal-box">
            <div class="modal-header">
                <!-- 밑의 메뉴 이름에 변수 넣어주세요 -->
                <span class="modal-title">{{ $store.state.menuid }}</span>
                <!-- <span class="modal-title">{{ doc.data().name }}</span> -->
                <a href="#" class="modal-close">&times;</a>
            </div>
            <div class="modal-content">
                <div class="modal-image">
                    <!-- 밑의 src에 주소 넣어주세요 -->
                    <img src="" alt="modal_detail_image">
                </div>
                <div class="modal-info">
                    <!-- 이곳에 메뉴 정보를 넣어주세요 -->
                    메뉴 정보
                </div>
            </div>
            <div class="modal-comment">
                댓글창
                <!-- 이곳에 댓글창 구현해 주세요 -->
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import store from '@/store.js'


const db = firebase.firestore();
let nsm = ''

export default {
    name: 'MenuModal',
    props: {
        name: {type: String},
        // menu: Object,
    },
    data() {
        return {
            nsm: '',
        }
    },
    mounted(){
        // nsm = db.collection('menus').doc("HnzgnU4CrfToTKmIdoCC").name
        // console.log(db.collection('menus').doc("HnzgnU4CrfToTKmIdoCC"))
        console.log('마운트')
        console.log(db.collection("menus"))
        var docRef = db.collection("menus").doc(store.state.menuid);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });


        // menuid = store.state.menuid
        // console.log(menuid)
        // console.log(db.collection('menus').doc(menuid))
        // menudata = db.collection('menus').doc(menuid)
        // console.log(menudata)
        // var article = document.getElementById("modal-button")
        // console.log(article.dataset.id)
        // myid = article.dataset.id
        // menuname = db.collection('menus').doc(myid).name 
        // menuimg = db.collection('menus').doc(myid).image
        // menuinfo = db.collection('menus').doc(myid).tags
    }
}
</script>

<style lang="scss">
@import './MenuModal.scss'
</style>


