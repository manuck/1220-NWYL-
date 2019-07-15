<template>
<div>
  <GitlabGraph></GitlabGraph>
</div>
</template>

<script >
import GitlabGraph from '../components/GitlabGraph'
import ImgBanner from '../components/ImgBanner'
import Navbar from '../components/Navbar'
import TopButton from '../components/TopButton'

export default {

  name: 'GitlabGraph',

  data() {
    return {
      gitCommits: [],
      gitCommitDates: [],
      commits: [],
    }
  },

  components: {
    ImgBanner,
    TopButton,
    Navbar,
    GitlabGraph,
  },
}
</script>
