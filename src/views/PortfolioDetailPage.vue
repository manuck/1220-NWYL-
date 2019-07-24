<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <Navbar :ismain="false"/>
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
import Navbar from '@/components/mainview/Navbar'
// import store from '@/store'

export default {
    name: 'PortfolioPage',
    components: {
        PortfolioList,
        Navbar,
    },
    // mounted: () => {
    //     console.log(Firestore.instance.collection('portfolios'))
    // }
}
</script>

<style>
.portfolio-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.portfolio-title {
    display: flex;
}
.button-rounded {
    color: white;
    border: 1px solid white;
    border-radius: 25px;
    padding: 7px 20px;
    background: rgba(255,255,255,0);
    transition: background 1s;
    transition: color 1s;
}
.button-rounded:hover {
    background: rgba(255,255,255,0.8);
    color: black;
}
</style>
