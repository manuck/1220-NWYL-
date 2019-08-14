<template>
    <div class="card-wrapper">
        <div class="card-title">
            배경화면 변경하기
        </div>
        <div class="card-bar"/>
        <div class="card-content-wrapper">
            <button class="button" @click="changeBgImageRandom">랜덤 이미지</button>
            <label class="button"> 로컬 이미지
                <ImgurBg/>
            </label>
        </div>
    </div>
</template>

<script>
import ImgurBg from '@/components/bgchange/ImgurBg'

export default {
    name: "ChangeBgImage",
    components: {
        ImgurBg,
    },
    methods: {
        changeBgImageRandom() {
            console.log('here')
            let bgimg = document.querySelector('.main-bg')
            bgimg.style.backgroundImage = `url("https://source.unsplash.com/random/1600x900")`
        }
    }
}
</script>

<style>
.card-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100px;
    width: 300px;
    min-width: 300px;
    border-radius: 7px;
    background: white;
    margin: 0 40px 20px 0;
    padding: 10px;
    box-shadow: 0 0 10px 1px grey;
    font-family: 'Noto Sans KR', sans-serif;
}
.card-wrapper:last-of-type {
    /* margin: 10px 0; */
}
.card-title {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
}
.card-bar {
    height: 1px;
    width: 100%;
    background: rgba(0,0,0,0.1);
}
.card-content-wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 1px;
    text-align: center;
    align-items: center;
    overflow: hidden;
}
</style>


