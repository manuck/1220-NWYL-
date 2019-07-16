<template>
  <div>
    <Navbar />
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">Gitlab Graph</div>
    </ImgBanner>
    <br />
    <GitlabGraph></GitlabGraph>
  </div>
</template>

<script >
import GitlabGraph from '../components/GitlabGraph'
import ImgBanner from '../components/ImgBanner'
import Navbar from '../components/Navbar'


export default {

  name: 'GitlabGraph2',
  components: {
    GitlabGraph,
    ImgBanner,
    Navbar,
  },
}
</script>
