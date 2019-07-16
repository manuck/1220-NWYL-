<template>
  <div>
    <Navbar />
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">Portfolio New</div>
    </ImgBanner>
    <v-container>

      <!-- Portfolio New -->
      <v-layout>
        <v-flex xs12>
          <Form>
          </Form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script type = "text/javascript">
import ImgBanner from '../components/ImgBanner'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import store from '../store'

export default {
  name: 'PortfolioNewPage',
	components: {
		ImgBanner,
    Form,
    Navbar,
	},
  mounted: () => {
    store.state.vueName.page = 'PortfolioNewPage';
    store.dispatch('addLog');
  }
}

</script>
