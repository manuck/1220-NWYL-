<template>
    <div class="card-wrapper">
        <div class="card-title">
            포트폴리오
        </div>
        <div class="card-bar"/>
        <div class="card-content-wrapper">
            <router-link to="portfolio/new" class="button" style="color:black !important;">포트폴리오 생성하기</router-link>
            <router-link to="portfolio" class="button" style="color:black !important;"><u>See our works</u></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "PortfolioViewBox",    
}
</script>

<style>

</style>