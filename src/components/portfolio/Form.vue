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
            <button @click="postPortfolio(title,body,img)" class="form-button">제출</button>
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
            img: '',
        }
    },
    methods: {
        postPortfolio(title, body, img) {
            return firestore.collection('portfolios').add({
                title,
                body,
                img,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            }).then(console.log('firebase added'))
        },
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