<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <SideNav/>
            <div class="body-wrapper">
                <div class="menu-flex">
                    <div class="filter-wrapper">
                        <ul class="country">
                            <li value="1" @click="koreaFood()">한식</li>
                            <li value="2" @click="japanFood()">일식</li>
                            <li value="3" @click="chinaFood()">중식</li>
                            <li value="4" @click="westFood()">양식</li>
                            <li value="5" @click="etcFood()">기타</li>
                        </ul>
                        <ul class="style">
                            <li>볶음</li>
                            <li>면</li>
                            <li>국</li>
                            <li>밥</li>
                            <li>고기</li>
                            <li>야채</li>
                            <li>과일</li>
                            <li>기타</li>
                        </ul>
                    </div>
                    <MenuList/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/mainview/SideNav'
import MenuList from '@/components/menu/MenuList'
import store from '@/store.js'

export default {
    name: 'MenuPage',
    components: {
        SideNav,
        MenuList,
    },
    methods: {
        koreaFood(){
            store.state.selected = '한식'
            // console.log(store.state.selected)
        },
        japanFood(){
            store.state.selected = '일식'
            // console.log(store.state.selected)
        },
        chinaFood(){
            store.state.selected = '중식'
            // console.log(store.state.selected)
        },
        westFood(){
            store.state.selected = '양식'
            // console.log(store.state.selected)
        },
        etcFood(){
            store.state.selected = '기타'
            // console.log(store.state.selected)
        },
    }
}
</script>

<style lang="scss">
@import './MenuPage.scss';
</style>
