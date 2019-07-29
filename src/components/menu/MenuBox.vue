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
        <a id="modal-button" class="button" href="#menu-modal" @click="menuidfunction(menu.id); commentfunction()">
            리뷰 보기
        </a>
        <a id="modal-button" class="button" @click="deletecheck()">
            삭제 확인용
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
        store.state.menuname = ''
        store.state.menuimg = ''
        store.state.menutag = ''

        store.state.menuid = a
        console.log(typeof(a))
        console.log(typeof(store.state.menuid))
        var docRef = db.collection("menus").doc(store.state.menuid);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("MENUS data:", doc.data());
                store.state.menuname = doc.data().name
                store.state.menuimg = doc.data().image
                console.log(doc.data().tags)
                store.state.menutag = doc.data().tags
            } else {
                // doc.data() will be undefined in this case
                console.log("No such MENUS!");
            }
            }).catch(function(error) {
                console.log("Error getting MENUS:", error);
            });
    },
    commentfunction() {
        store.state.menucomments = []
  
        const collection = db.collection('menus').doc(store.state.menuid).collection("comments").orderBy("created_at");
        collection.get().then(snapshot => {
            snapshot.forEach(doc => {
            console.log( doc.data().comment); 
            store.state.menucomments.push(doc.data().comment)
            });
            });
    },
    deletecheck() {
        console.log("삭제전")
        db.collection('menus').doc(store.state.menuid).collection("5Xaxs0CxMIXBIb97UxrK").doc("comment").delete()
        console.log("삭제됨")

    }
    
    }
    }

</script>

<style lang="scss">
@import './MenuBox.scss';
</style>
