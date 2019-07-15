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
    <Imgur></Imgur>
    <v-btn @click="postPortfolio(title,body,img)">submit</v-btn>
  </v-form>
</template>

<script>
import Imgur from '../components/Imgur'
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
</style>