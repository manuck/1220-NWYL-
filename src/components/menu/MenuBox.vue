<template>
    <div class="menu-box">
        <div class="menu-title">
            {{ menu.name }}
        </div>
        <div class="menu-image">
            <img :src="menu.image" style="width: 150px; height: 150px;" alt="menu_detail_image">
        </div>
        <ul class="menu-tags">
            <li v-for="tag in menu.tags" :tag="tag" :key="tag.id" class="tag">
                {{ tag }}
            </li>
        </ul>
        <div class="menu-favorite">
            <img v-for="score in menu.score" :key="score.id" src="@/assets/images/favorites-1.png" class="favorite-icon" alt="favorite_star_image"/>
        </div>
        <!-- <p>{{menu.id}}</p> -->
        <a id="modal-button" class="button" href="#menu-modal" @click="menuidfunction(menu.id)">
            리뷰 보기
        </a>
    </div>
</template>

<script>
import MenuModal from './MenuModal'
import store from '@/store.js'
import firebase from 'firebase/app'


const db = firebase.firestore();

export default {
    name: 'MenuBox',
    data() {
        return {
        }
    },
    props: {
        menu: Object,
    },
    components: {
        MenuModal,
    },
    methods: {
    menuidfunction(a) {
        if (a[0] == " "){
            store.state.menuid = a.slice(1)}
        else{
            store.state.menuid = a
        }
        // .slice(1, 21)
        console.log(a)
        console.log(store.state.menuid)
        console.log("HnzgnU4CrfToTKmIdoCC")
        // store.state.menuname = db.collection('menus').doc(a).onSnapshot(function(doc) {
        // });
        console.log(typeof(a))
        console.log(typeof(store.state.menuid))
        var docRef = db.collection("menus").doc(store.state.menuid);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                store.state.menuname = doc.data().name
                store.state.menuimg = doc.data().image
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
    }
    }
}
</script>

<style lang="scss">
@import './MenuBox.scss';
</style>
