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
    <v-btn @click="postPortfolio(title, body, imgSrc)">submit</v-btn>
  </v-form>
</template>

<script>
import Imgur from '../components/Imgur'
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import { firestore } from '@/services/FirebaseService'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default {
  
	name: 'Form',
	// props: {
	// 	title: {type: String},
  //   body: {type: String},
  //   imgSrc: {type: String},
  // },
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

  methods: {
    postPortfolio(title, body, imgSrc) {
    console.log(this)
    if (this.$store.state.imgSrc){
    console.log(imgSrc)
    console.log('vuex')
    console.log(this.$store.state.imgSrc)
    imgSrc = this.$store.state.imgSrc }
		return firestore.collection('portfolios').add({
			title,
			body,
			imgSrc,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
    }).then(console.log('전송완료'))
	  }
    }
}
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>