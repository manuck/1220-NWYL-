<template>
    <div id="footer">
      <div class="footer-wrapper">
        <div class="left">
          <span>ⓒ 2019 Copyright LimDM</span>
        </div>
        <div class="center">
        <Weather></Weather>
        </div>
        <div class="right">
          <span>ssafy blanc</span>
        </div>
      </div>
    </div>
</template>

<script>
import Weather from '../components/Weather'

export default {
    name: 'Footer',
    components: {
		Weather
    },
    data() {
        return {
            drawer: false
        }
    }
}
</script>

<style>

</style>