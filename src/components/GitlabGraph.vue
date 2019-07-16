<template>
<div>
  <v-container>
    <v-layout my-5>
      <v-flex xs12>
        <div class="text-xs-center mt-5"><h1>Gitlab Commit Graph</h1></div>
        <h2 class="headline mt-2 text-xs-right">
          <a href="//lab.ssafy.com/dmlimgo/webmobile-sub2" class="button blue mr-3">Gitlab Page 방문</a>
        </h2>
        <div id="chart" class="hide_xs mb-5"></div>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src = "https://unpkg.com/axios/dist/axios.min.js"></script>
<script src = "https://unpkg.com/frappe-charts@1.1.0/dist/frappe-charts.min.iife.js"></script>

<script >
import ImgBanner from '../components/ImgBanner'
import PostList from '../components/PostList'
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

  },

  mounted() {
    this.getgitCommits()
    const data = {
      labels: this.gitCommitDates,
      datasets: [{
        name: "Commit count",
        type: "bar",
        values: this.commits
      }, ]
    }

    const chart = new frappe.Chart("#chart", {

      data: data,
      type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
      height: 450,
      colors: ['#7cd6fd', '#743ee2']
    })
  },

  methods: {
    getgitCommits: function() {
      axios.get('https://lab.ssafy.com/api/v4/projects/6075/events?per_page=100&private_token=JqwP6fMQbfkr2sLj9b_R')
        .then(response => {
          this.gitCommits = response.data.reverse()
        })
        .then(() => {
          this.getDate()
        })
    },

    getDate: function() {

      for (var i = 0; i < this.gitCommits.length; i++) {
        if (this.gitCommits[i]["action_name"] === "pushed to") {
          var flag = 0;

          var tempdate = this.gitCommits[i]["created_at"].slice(0, 10)

          for (var j = 0; j < this.gitCommitDates.length; j++) {

            if (tempdate === this.gitCommitDates[j]) {
              flag = 1;
              this.commits[j] += 1
              // this.commits[j] += this.gitCommits[i]["push_data"]["commit_count"];

            }
          }
          if (flag === 0) {
            this.gitCommitDates.push(tempdate);
            this.commits.push(this.gitCommits[i]["push_data"]["commit_count"]);

          }
        }
      }
    }
  },
}
</script>

<style>
@media only screen and (max-width : 450px) {
  .hide_xs {
    display: none;
  }
}
</style>
