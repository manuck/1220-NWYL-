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
            <!-- v-for="score in menu.score" :key="score.id" -->
            <!-- <img v-for="score in menu.score" :key="score.id" src="@/assets/images/favorites-1.png" class="favorite-icon" alt="favorite_star_image"/> -->
            <!-- <span>평점: </span>
            <span v-bind:id="menu.id">{{ menu.score }} </span>
            <span>/ 5</span> -->
            <div class="star-ratings-css">
            <div v-bind:id="menu.id" class="star-ratings-css-top" style="width: 84%"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
        </div>
        <!-- <div class='rating_bar'>
        <!-- div element that contains full stars with percentage width, which represents rating -->
        <!-- <div class='rating' style='width:40%;'></div>
        </div> -->
        <a id="modal-button" class="button" href="#menu-modal" @click="menuidfunction(menu.id); commentfunction(); scorefunction()">
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
        tmp : {{menu.id}}
    },
    props: {
        menu: Object,
    },
    components: {
        MenuModal,
    },
    mounted(){
        console.log(tmp)
        // document.getElementById(menuid)
        // console.log(document.querySelector(".menulist-wrapper"))
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
        const collection = db.collection('menus').doc(store.state.menuid).collection("comments").orderBy("created_at", "desc");
        console.log('commentfucntion:',collection)
        collection.onSnapshot(snapshot => {
            store.state.menucomments = []
            store.state.commentId = []
            store.state.commentScore = 0
            var commentL = 0
            snapshot.forEach(doc => {
            commentL += 1
            store.state.menucomments.push(doc.data().comment)
            store.state.commentId.push(doc.data().id)
            store.state.commentScore += Number(doc.data().score)
            });
            console.log("score 합 : ",store.state.commentScore)
            console.log('commentL : ',commentL)
            var res = parseInt(store.state.commentScore/commentL)
            console.log("avg : ",res)
            document.getElementById(store.state.menuid).style.width = res*20 + "%";
            db.collection('menus').doc(store.state.menuid).update({score:Number(res)})
            });
    },
    scorefunction(){
        const collection = db.collection('menus').doc(store.state.menuid)
        collection.onSnapshot(function(doc){
            console.log("Current score: ", doc.data().score)
        })
    }
}
}

</script>

<style lang="scss">
@import './MenuBox.scss';

.star-ratings-css {
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 25px;
//   height: 25px;
//   width: 100px;
//   margin: 0 auto;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
  
  &-top {
    color: #e7711b;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  &-bottom {
    padding: 0;
    display: block;
    z-index: 0;
  }
}


</style>
