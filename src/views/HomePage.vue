<template>
  <div>
    <Navbar></Navbar>
    <TranslateBox/>
    <TopButton />
    <Bookmark />
    <div id="google_translate_element"></div>
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900" name="mainPic">
      <div style="line-height:1.2em;" slot="text">Real artists ship.<br> -steve jobs</div>
    </ImgBanner>
      <button onclick="unsplash()" src="https://source.unsplash.com/random/" name="unsplash">unsplash</button>
      <Imgur @imguring="imguring"></Imgur>
      <p>sad {{imagelink}}</p>
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

      <!-- GitlabGraph -->
      <v-layout my-5>
        <v-flex xs12>
          <GitlabGraph></GitlabGraph>
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
import TranslateBox from '../components/TranslateBox'
import Imgur from '../components/Imgur'
import GitlabGraph from '../components/GitlabGraph'
import GitlabLinkBox from '../components/GitlabLinkBox'

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
    TranslateBox,
    Imgur,
    GitlabGraph,
    GitlabLinkBox,
  },
	methods: {
    imguring(event) {
      const {value} = event.imagelink;
      this.value = value;
      console.log('asd');
      console.log(value);
      },
    getImgUrl(img) {
      return require('../assets/' + img)
    },
    unsplash(){
        document.mainPic.imgSrc = document.unsplash.src
        return
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
