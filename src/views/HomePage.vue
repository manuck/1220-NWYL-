<template>
  <div>
    <Navbar></Navbar>
    <TopButton />
    <Bookmark />
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;" slot="text">Real artists ship.<br> -steve jobs</div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5 style="justify-content: center;">
        <v-flex xs8 aboutme>
          <h2 class="headline mb-3">About Me</h2>
          <p class="mr-4 aboutme">안녕하세요, 임동명입니다.<br>디자인을 사랑해서 프론트엔드를 공부하고 있지만 백엔드도 공부해서 전체적인 그림을 볼 줄아는 웹 개발자가 되고 싶습니다.</p>
        </v-flex>
        <v-flex xs4 hidden-xs-only>
          <v-img :src="getImgUrl('profile.jpg')" aspect-ratio="1.5"/>
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <router-link to="portfolio">
            <h2 class="headline my-5 text-xs-center">Portfolio</h2>
          </router-link>
          <PortfolioList></PortfolioList>
        </v-flex>
      </v-layout>

      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <router-link to="post">
            <h2 class="headline my-5 text-xs-center">Post</h2>
          </router-link>
          <PostList :column="2"></PostList>
        </v-flex>
      </v-layout>


      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <router-link to="project">
            <h2 class="headline my-5 text-xs-center">Project</h2>
          </router-link>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'
import Navbar from '../components/Navbar'
import TopButton from '../components/TopButton'
import Bookmark from '../components/Bookmark'
import Footer from '../components/Footer'

export default {
	name: 'HomePage',
	components: {
		ImgBanner,
		PortfolioList,
		PostList,
    RepositoryList,
    Navbar,
    TopButton,
    Bookmark,
    Footer,
  },
  // mounted() {
  //   console.log('beforecreate')
  //   let userAgent = window.navigator.userAgent;
  //   let isChrome = userAgent.indexOf('Chrome')
  //   let isChromeMobile = userAgent.indexOf('CriOS');
  //   let isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
  //   let isWindows = userAgent.indexOf('Windows NT');
  //   let isEdge = userAgent.indexOf('Edge');
  //   let isIE = userAgent.indexOf('Trident');
  //   // if(isChrome > -1 || isChromeMobile > -1){
  //   //   if(isSamsungBrowser < 0 && isEdge < 0){
  //   //     alert('해당 사이트는 크롬에 최적화 되어 있습니다.')
  //   //   }
  //   // }
  //   if(!((isChrome > -1 && isWindows > -1 && isChromeMobile < 0 && isSamsungBrowser < 0 && isEdge < 0 && isIE < 0) || 
  //   (isChrome < 0 && isChromeMobile > -1 && isSamsungBrowser < 0 && isWindows < 0 && isEdge < 0 && isIE < 0))) {
  //     alert('해당 사이트는 크롬에 최적화 되어 있습니다.')
  //   } 
  // },
	methods: {
    getImgUrl(img) {
      return require('../assets/' + img)
    },
  },
}
</script>

<style>
  @media screen and (max-width: 600px) {
    .aboutme {
      text-align: center;
      margin: 0 !important;
    }
  }
  .display-2 {
    font-size: 6vw !important;
  }
</style>