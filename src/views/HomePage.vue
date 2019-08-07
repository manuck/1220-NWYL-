<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <div class="body-wrapper">
                <div class="section-1">
                    <div class="section-1-title">
                        <span style="font-size:100px; line-height:100px;">
                            12<span style="color: #c8e19d;">15</span>
                        </span>
                    </div>
                    <div class="section-1-content">
                        <div class="section-1-content-menu">
                            <!-- for shadow -->
                            <div v-for="i in 20" :key="i" :class="'ball'+i" style="box-shadow: 0 0 0 5px black; z-index: -1;"/>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 760 350" style="enable-background:new 0 0 760 350;" xml:space="preserve">
                                <path id="XMLID_3_" style="fill:#f7f7f7;stroke:#000000;stroke-miterlimit:10;" d="M380,14.6C85.4,14.6,40.4,8.7,31.6,169.5v5.5  c0,0,0,5.5,0,5.5C40.4,341.3,85.4,335.4,380,335.4s339.6,5.9,348.4-154.9c0,0,0-5.5,0-5.5v-5.5C719.6,8.7,674.6,14.6,380,14.6z"/>
                            </svg>
                            <div v-for="i in 20" :key="i" :class="'ball'+i"/>

                            <!-- <div id="main-korean" class="section-1-menu-box"></div> -->
                            <!-- <div id="main-special" class="section-1-menu-box"></div> -->
                            <!-- <div id="main-star" class="section-1-menu-box"></div> -->
                        </div>
                        <SideNav/>
                    </div>
                    <div class="section-1-scroll">
                        <div class="section-1-content-image">
                            <img src="@/assets/images/lying_hd.png" style="height:100px; width:auto;" alt="main_image"/>
                        </div>
                        <button class="scroll-round" v-on:click="pageScroll"/>
                    </div>
                </div>
                <div class="section-2">
                    <div class="col1">
                        <div class="aboutus-image-box">
                            <img src="@/assets/images/aboutus/nsm_emoji.png" class="aboutus-image" alt="seungman">
                        </div>
                        <div class="aboutus-image-box">
                            <img src="@/assets/images/aboutus/ldm_emoji.png" class="aboutus-image" alt="dongmyeong">
                        </div>
                        <div class="aboutus-image-box">
                            <img src="@/assets/images/aboutus/koh_emoji.png" class="aboutus-image" alt="ohhyun">
                        </div>
                    </div>
                    <div class="col2">
                        <div class="aboutus-image-box">
                            <img src="@/assets/images/aboutus/nhw_emoji.png" class="aboutus-image" alt="hyunwoo">
                        </div>
                        <div class="aboutus-image-box">
                            <img src="@/assets/images/aboutus/chy_emoji.png" class="aboutus-image" alt="hongyong">
                        </div>
                    </div>
                </div>
                <div class="section-3">
                    <Navbar :ismain="true"/>
                    <div class="body-flex-c">
                        <ProfileBox/>
                        <ChangeBgImage/>
                        <GitlabLinkBox/>
                        <PortfolioViewBox/>
                        <WeatherBox/>
                        <TranslateBox/>
                        <Map/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/mainview/Navbar'
import SideNav from '@/components/mainview/SideNav'
import Weather from '@/components/weather/Weather'
import WeatherBox from '@/components/weather/WeatherBox'
import ProfileBox from '@/components/gravatar/ProfileBox'
import TranslateBox from '@/components/translate/TranslateBox'
import GitlabLinkBox from '@/components/gitlab/GitlabLinkBox'
import ChangeBgImage from '@/components/bgchange/ChangeBgImage'
import PortfolioViewBox from '@/components/portfolio/PortfolioViewBox'
import store from '@/store'
import Map from '@/components/map/Map'

// let time;
export default {
    name: 'pjt2',
    components: {
        Navbar,
        SideNav,
        Weather,
        WeatherBox,
        ProfileBox,
        TranslateBox,
        GitlabLinkBox,
        ChangeBgImage,
        PortfolioViewBox,
        Map,
    },
    data() {
        return {
            statY: 0,
            heightnow: 0,
            timer: null,
        }
    },
    created() {
        // window.addEventListener('scroll', this.autoMoveToSecond)
    },
    mounted() {
        window.addEventListener('wheel', this.pageScroll)
        var cur_time = new Date();
        var uid = store.state.user.displayName;

        store.state.vueName.page = 'HomePage';
        store.state.vueName.time = cur_time;
        store.dispatch('addLog');

        var team_btn = document.querySelector('#team-icon')
        console.log(team_btn)
        team_btn.addEventListener('click', this.pageScroll)
    },
    methods: {
        autoMoveToSecond() {
            this.statY = window.scrollY;
            this.heightnow = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            if(this.statY > 10 && this.statY < 100) {
                console.log(this.heightnow)
                window.scroll({
                    top: this.heightnow,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        },
        pageScroll(e) {
            console.log('pageScroll activated', this.timer)
            if (!this.timer) {
                let y = e.deltaY
                let h = window.innerHeight
                console.log('pageScroll if 문', this.timer, y, h)
                if (y > 0 || !y)  window.scrollBy(0, h)
                else        window.scrollBy(0, -h)
                this.timer = setTimeout(() => {
                    this.timer = null
                }, 500)
            }
        }
    },
}
</script>

<style lang="scss">
@import './HomePage.scss';
</style>
