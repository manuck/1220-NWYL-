<template>
  <div>
    <Navbar />
    <TopButton />
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">Portfolio</div>
    </ImgBanner>
    <v-container>

      <!-- Portfolio -->
      
      <router-link to="portfolio/new">
        <v-btn>
          Create Portfolio
        </v-btn>
      </router-link>
      
      <v-layout>
        <v-flex xs12>
          <PortfolioList :limits="6" :load-more="true"></PortfolioList>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import Navbar from '../components/Navbar'
import TopButton from '../components/TopButton'

export default {
	name: 'PortfolioPage',
	components: {
		ImgBanner,
    PortfolioList,
    Navbar,
    TopButton,
	},
}
</script>
