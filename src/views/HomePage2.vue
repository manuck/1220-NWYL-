<template>
    <div style="height: 100%; width: 100%;">
        <!-- <div class="main-bg"></div> -->
        <div class="main-wrapper">
            <Navbar2 />
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
import Navbar2 from '../components/Navbar2'
import ChangeBgImage from '../components/ChangeBgImage'
import GitlabLinkBox from '../components/GitlabLinkBox'
import PortfolioViewBox from '../components/PortfolioViewBox'
import WeatherBox from '../components/WeatherBox'
import Weather from '../components/Weather'
import TranslateBox from '../components/TranslateBox'

export default {
    name: 'pjt2',
    components: {
        Navbar2,
        ChangeBgImage,
        GitlabLinkBox,
        PortfolioViewBox,
        Weather,
        WeatherBox,
        TranslateBox,
    }
}
</script>
<style>
    @import '../assets/css/HomePage2.css';
</style>
