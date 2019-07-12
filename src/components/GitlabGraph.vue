<!-- <template>
<div id="chart"></div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src = "https://unpkg.com/axios/dist/axios.min.js"> </script>
<script src = "https://unpkg.com/frappe-charts@1.1.0/dist/frappe-charts.min.iife.js"> </script>

<script>
export default {
  name: 'GitlabGraph',
  methods: {
    getRepo: function () {
        axios.get(
                'https://lab.ssafy.com/api/v4/projects/6075/events?private_token=JqwP6fMQbfkr2sLj9b_R'
            )
            .then(response => {
                this.repo = response.data
            })
            .then(() => {
                this.getDate()
            })
    },

    getDate: function () {

        for (var i = 0; i < this.repo.length; i++) {
            var flag = 0;
            if (this.repo[i]["action_name"] != "pushed to") {
              continue
            }
            var tempdate = this.repo[i]["created_at"].slice(0, 10)
            for (var j = 0; j < this.date.length; j++) {
                if (tempdate === this.date[j]) {
                    flag = 1;
                    this.commits[j] += this.repo[i]["push_data"]["commit_count"];

                }
            }
            if (flag === 0) {
                this.date.push(tempdate);
                this.commits.push(this.repo[i]["push_data"]["commit_count"]);

            }
        }
    }
  },
  mounted () {
    this.getRepo()
  }

    const app = new Vue({

        el: '#app',

        data: {
            repo: [],
            date: [],
            commits: [],
            // date_2 : []

        },
    })
    // 문제점
    const data = {
        labels: app.date,
        datasets: [{
                name: "Some Data",
                type: "bar",
                values: app.commits
            },

        ]
    }

    const chart = new frappe.Chart("#chart", { // or a DOM element,
        // new Chart() in case of ES6 module with above usage
        title: "Gitlab Commit log",
        data: data,
        type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
        height: 250,
        colors: ['#7cd6fd']
    })
  }
</script> -->
