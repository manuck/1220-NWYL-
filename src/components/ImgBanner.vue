<template>
  <div>
    <v-img :src="imgSrc"
           aspect-ratio="1.7" class="imgsize">
      <v-layout align-center justify-center row fill-height>
        <v-flex text-xs-center>
          <span class="text-shadow display-2 font-weight-light">
            <slot name="text"/>
          </span>
        </v-flex>
      </v-layout>
    </v-img>
  </div>
</template>



<script>

export default {
	name: 'ImgBanner',
	props: {
		imgSrc: {type: String},
		text: {type: String}
	},
	methods: {
	},
}
</script>
<style>
  @media screen and (max-width: 600px) {
    .imgsize {
      height: 100vh;
    }
  }
  .text-shadow {
    text-shadow: 0 0 15px rgb(255,255,255);
  }
</style>
