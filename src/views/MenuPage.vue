<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <SideNav/>
            <div class="body-wrapper">
                <div class="portfolio-wrapper">
                    <router-link to="portfolio/new" class="portfolio-title">
                        <span class="button-rounded">
                            Write Portfolio
                        </span>
                    </router-link>
                    <div class="portfolio-flex-r">              
                        <PortfolioList :limits="6" :load-more="true"></PortfolioList>
                    </div>
                </div>
            </div>
            <div class="footer-wrapper">
            </div>
        </div>
    </div>
</template>

<script>
import PortfolioList from '@/components/portfolio/PortfolioList'
import SideNav from '@/components/mainview/SideNav'

export default {
    name: 'MenuPage',
    components: {
        PortfolioList,
        SideNav,
    },
}
</script>

<style lang="scss">
@import './MenuPage.scss';
</style>
