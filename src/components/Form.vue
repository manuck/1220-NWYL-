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
    <v-btn @click="submit">submit</v-btn>
  </v-form>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import { firestore } from '@/services/FirebaseService'
import Imgur from '../components/Imgur'

export default {
	// name: 'Form',
	// props: {
	// 	title: {type: String},
  //   body: {type: String},
  //   date: {type: String},
  //   imgSrc: {type: String},
  // },
  components: {
    markdownEditor,
    Imgur,
  },
  data() {
    return {
      title: '',
      body: '',
      date: '',
      imgSrc: '',
    }
  },
  methods: {
    submit() {
      console.log('submit clicked')
      const project = {
        title: this.title,
        body: this.body,
        date: 'dummy',
        imgSrc: 'dummy',
      }
      console.log(project)
      firestore.collection('project').add(project).then(() => {
        console.log('added to firestore')
      })

    }
  }
}
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>