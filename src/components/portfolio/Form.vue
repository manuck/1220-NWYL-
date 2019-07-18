<template>
    <v-form>
        <v-text-field
          v-model="title"
          :counter="100"
          label="Title"
          required
        ></v-text-field>
        <markdown-editor 
          v-model="body" 
          ref="markdownEditor"
        ></markdown-editor>
        <div class="submit-area">
          <Imgur></Imgur>
          <button onclick="location.href='/portfolio'" id="formButton" @click="postPortfolio(title,body,imgSrc)" class="form-button" disabled="" type="button">제출</button>
          <!-- <router-link to="/portfolio" @click="postPortfolio(title,body,imgSrc)" class="form-button">제출</router-link> -->
        </div>
    </v-form>
</template>

<script>
import Imgur from '@/components/portfolio/Imgur'
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import { firestore } from '@/services/FirebaseService'
import firebase from 'firebase/app'

export default {
    name: 'Form',
    components: {
        Imgur,
        markdownEditor,
    },
    data() {
        return {
            title: '',
            body: '',
            imgSrc: 'https://source.unsplash.com/random/',
        }
    },
    mounted() {
        document.getElementById("formButton").disabled = false;
    },
        methods: {
    postPortfolio(title, body, imgSrc) {
        if (this.$store.state.imgSrc){
            imgSrc = this.$store.state.imgSrc }
            return firestore.collection('portfolios').add({
                title,
                body,
                imgSrc,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';
.submit-area {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.form-button {
    border: 1px solid black;
    border-radius: 50px;
    color: black;
    padding: 7px 30px;
    background-color: rgba(0,0,0,0);
    transition: background-color 1s, border 0.3s;
}
.form-button:hover {
    background-color: rgba(0,0,0,0.2);
    border: 1px solid rgba(0,0,0,0.1);
}
</style>