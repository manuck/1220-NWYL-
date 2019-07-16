<template>
    <div style="height: 100%; width: 100%;">
        <!-- <div class="main-bg"></div> -->
        <div class="main-wrapper">
            <Navbar />
            <div class="body-wrapper">
                <div class="body-flex-c">
                    <ChangeBgImage/>
                    <GitlabLinkBox/>
                    <PortfolioViewBox/>
                    <WeatherBox/>
                    <TranslateBox/>
                </div>
            </div>
            <div class="footer-wrapper">
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/mainview/Navbar'
import ChangeBgImage from '@/components/bgchange/ChangeBgImage'
import GitlabLinkBox from '@/components/gitlab/GitlabLinkBox'
import PortfolioViewBox from '@/components/portfolio/PortfolioViewBox'
import WeatherBox from '@/components/weather/WeatherBox'
import Weather from '@/components/weather/Weather'
import TranslateBox from '@/components/translate/TranslateBox'

export default {
    name: 'pjt2',
    components: {
        Navbar,
        ChangeBgImage,
        GitlabLinkBox,
        PortfolioViewBox,
        Weather,
        WeatherBox,
        TranslateBox,
    }
}
</script>

<style lang="scss">
@import '@/assets/sass/HomePage.scss';
</style>
