<template>
    <div id="topbutton" @click="goToTop()" v-bind:style="ggg">^</div>
</template>

<script>
export default {
	name: 'TopButton',
  data(){
    return {
      yy: 0,
    }
  },
  created() {
    window.addEventListener('scroll', this.topButtonView)
  },
	methods: {
    topButtonView() {
      this.yy = window.scrollY;
    },
    goToTop() {
      document.documentElement.scrollTop = 0;
    }
  },
  computed: {
    ggg() {
      if (this.yy < 100) {
        return { 'display' :'none'}
      }
    }
  }
}
</script>

<style>
    #topbutton {
        display: inline-block;
        position: fixed;
        bottom: 70px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        color:white;
        font-size:25px;
        text-align:center;
        line-height:60px;
        background-color: black;
        z-index: 5;
        transition: display 2s;
    }
    #topbutton:hover {
        background-color: gray;
        transition: background-color .3s;
        cursor: pointer;
    }
</style>