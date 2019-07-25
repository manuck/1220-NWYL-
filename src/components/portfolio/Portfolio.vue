<template>
  <v-card>
    <v-img :src="imgSrc" height="200px" alt="portfolio_image">
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline jemok" v-on:click="detail()">{{title}}</div>
		<!-- <router-link :to="{ name: 'detail', params: { Pfid: id }}" class="headline jemok">{{title}}</router-link> -->
        <span class="grey--text content">{{body}}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import Router from 'vue-router'
import firebase from 'firebase/app'
import FirebaseService from '@/services/FirebaseService'

const db = firebase.firestore();

export default {
	name: 'Portfolio',
	props: {
		date: {type: String},
		title: {type: String},
		body: {type: String},
		imgSrc: {type: String},
	},
	detail() {
	// console.log(this.$route.params.id)
	console.log('디테일')
	},
	data() {
		return {
			//
		}
	},
	mounted(){
		// console.log(this)
		// console.log(this._uid)
		// console.log(db.collection('portfolios').where(firebase.firestore.FieldPath.documentId(), '==', this.documentId).get())
	},
}
</script>

<style>
.jemok {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.content {
	display: -webkit-box;
	height: 4.5em;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
</style>

