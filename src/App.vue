<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import store from './store'
export default {
	name: 'App',
	store,
	data() {
		return {
			//branch용
		}
	},
	watch: {
		$route (to, from) {
			if (to.name === 'menu') {
				document.querySelector('html').style.overflowY = 'scroll'
			} else {
				document.querySelector('html').style.overflowY = 'hidden'
			}
		}
	},
}
</script>
