<template>
    <div id="menu-add-modal" class="add-modal-wrapper">
        <a href="#" class="modal-back"/>
        <div class="add-modal-box">
            <v-form>
            <v-text-field
                v-model="name"
                :counter="100"
                label="name"
                required
            ></v-text-field>
            <br>

            <button @click="imageSelect1()" class="form-button" type="button">이미지 url 직접 입력</button>
            <button @click="imageSelect2()" class="form-button" type="button">이미지 파일 등록</button> 
            <div v-if="isStatusOn">
                <v-text-field
                    v-model="image"
                    :counter="100"
                    label="image"
                    required
                ></v-text-field>
            </div>
            <div v-else>
                <br>
                <Imgur></Imgur>
            </div>
            

            <br>
            <select v-model="selected" style="margin-top:20px; margin-right:20px">
                <option disabled value="">Please select one</option>
                <option>한식</option>
                <option>양식</option>
                <option>일식</option>
                <option>중식</option>
                <option>기타</option>
            </select>
            <span>선택함: {{ selected }}</span>

            <div id='tags' style="margin-top:50px;">
                <input type="checkbox" id="stir-fry" value="볶음" v-model="tags">
                <label for="볶음" style="margin-right:20px">볶음</label>
                <input type="checkbox" id="noodle" value="면" v-model="tags">
                <label for="면" style="margin-right:20px">면</label>
                <input type="checkbox" id="soup" value="국" v-model="tags">
                <label for="국" style="margin-right:20px">국</label>
                <input type="checkbox" id="rice" value="밥" v-model="tags">
                <label for="밥" style="margin-right:20px">밥</label>
                <input type="checkbox" id="meat" value="고기" v-model="tags">
                <label for="고기" style="margin-right:20px">고기</label>
                <input type="checkbox" id="vegetable" value="야채" v-model="tags">
                <label for="야채" style="margin-right:20px">야채</label>
                <input type="checkbox" id="fruit" value="과일" v-model="tags">
                <label for="과일" style="margin-right:20px">과일</label>
                <input type="checkbox" id="etc" value="기타" v-model="tags">
                <label for="기타" style="margin-right:20px">기타</label>
                <br>
                <span>체크한 이름: {{ tags }}</span>
            </div>
    
            <div class="submit-area">
                <button id="formButton" @click="postMenu(name, score, selected, tags, image)" class="form-button" type="button">제출</button>
            </div>
            </v-form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import store from '@/store.js'
import Imgur from '@/components/portfolio/Imgur'
import { firestore } from '@/services/FirebaseService'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

const db = firebase.firestore();
var basicImg = 'https://i.imgur.com/CmRE3B9.jpg'
export default {
    name: 'AddMenuModal',
    components: {
        Imgur,
    },
    props: {
    },
    data() {
        return {
            name: '',
            score: 0,
            selected:'',
            tags: [],
            tags2:{},
            image: '',
            isStatusOn: true,
        }
    },
    methods: {
        postMenu(name, score, selected, tags, image) {
            console.log(this.tags)
            var myclass = {};
            for(var i in tags){
                var k = tags[i]
                myclass[k] = true
            }
            console.log(myclass)
            console.log(this.tags2)
            if (this.$store.state.imgSrc){
                image = this.$store.state.imgSrc }
            else if (image===""){
                image = basicImg
            }
        
            // portfolio write 내용 firebase에 추가
            return firestore.collection('menus').add({
                name,
                score,
                image,
                selected,
                tags,
                tags2:myclass,
                uploadUser: store.state.user.email,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(function(docRef) {
                // console.log("Document written with ID: ", docRef.id);
                firestore.collection('menus').doc(docRef.id).update({
                    id: docRef.id
                })
                location.href="/menu"
            })
        },
        imageSelect1() {
            this.isStatusOn = true;
        },
        imageSelect2() {
            this.isStatusOn = false;
        }
    },
}
</script>

<style lang="scss">
@import './AddMenuModal.scss';
</style>



