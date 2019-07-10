<template>
  <div id="weather">
      <span>{{ city }}의 날씨 : {{ weather }} </span>
  </div>
</template>

<script>
// import { posix } from 'path';

export default {
  name: 'Weather',
  data() {
    return {
      view: false,
      country: '',
      city: '',
      weather: '',
    }
  },
  computed: {
      hasResult: function() {
        return this.posts.length > 0
      },
      
  },
  mounted() {
    var key = '69d0d9ea132e148068fc83dc5fed6a42'
    const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=${key}`
      console.log(BASE_URL)
      this.$http.get(`${BASE_URL}`)
      .then((result) => {
        this.country = result.data.sys.country
        this.city = result.data.name
        this.weather = result.data.weather[0].main
        this.view = true
        console.log(result)
      })
  },
  methods: {
  }

}
</script>

<style>
#weather {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>