<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <div class="body-wrapper">
                <div class="section-1">
                    <div class="section-1-title">
                        <span style="font-size:100px;">
                            NW<span style="color: #c8e19d;">YL</span>
                        </span>
                    </div>
                    <div class="section-1-content">
                        <img src="@/assets/images/lying_hd.png" style="height:280px; width:auto;"/>
                    </div>
                    <div class="section-1-scroll">
                        <div class="scroll-round"/>
                    </div>
                </div>
                <!-- <div class="section-2">
                </div> -->
                <div class="section-3">
                    <Navbar :ismain="true"/>
                    <div class="body-flex-c">
                        <ChangeBgImage/>
                        <GitlabLinkBox/>
                        <PortfolioViewBox/>
                        <WeatherBox/>
                        <TranslateBox/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/mainview/Navbar'
import Weather from '@/components/weather/Weather'
import WeatherBox from '@/components/weather/WeatherBox'
import TranslateBox from '@/components/translate/TranslateBox'
import GitlabLinkBox from '@/components/gitlab/GitlabLinkBox'
import ChangeBgImage from '@/components/bgchange/ChangeBgImage'
import PortfolioViewBox from '@/components/portfolio/PortfolioViewBox'
import store from '@/store'

export default {
    name: 'pjt2',
    components: {
        Navbar,
        Weather,
        WeatherBox,
        TranslateBox,
        GitlabLinkBox,
        ChangeBgImage,
        PortfolioViewBox,
    },
    data() {
        return {
            statY: 0,
            heightnow: 0,
        }
    },
    created() {
        // window.addEventListener('scroll', this.autoMoveToSecond)
    },
    mounted() {
        document.querySelector('.main-wrapper').attr(bgimage, 'url("https://source.unsplash.com/random/1600x900")');
        var cur_time = new Date();
        var uid = store.state.user.displayName;

        store.state.vueName.page = 'HomePage';
        store.state.vueName.time = cur_time;
        store.state.vueName.userid = uid;
        store.dispatch('addLog');
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
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/HomePage.scss';
</style>
