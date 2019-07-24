<template>
  <v-card>
    <v-img :src="imgSrc" height="200px">
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

// this.portfolios = FirebaseService.getPortfolios()
// const db = firebase.firestore();
// const ref = db.collection('portfolios').doc();
// const id = ref.id;



export default {
	name: 'Portfolio',
	props: {
		date: {type: String},
		title: {type: String},
		body: {type: String},
		imgSrc: {type: String},
	},
	data() {
		return {
			//
		}
	},
	detail(){
		// console.log(this.$route.params.id)
	},
	mounted(){
		// console.log(this.$route.params)
		// console.log('db')
		// console.log(db)
		// console.log('ref')
		// console.log(ref)
		// console.log('id')
		// console.log(id)
	}
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

