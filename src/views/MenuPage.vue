<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <SideNav/>
            <div class="body-wrapper">
                <div class="menu-flex">
                    <div class="filter-wrapper">
                        <ul class="country">
                            <li value="1" @click="foodSelect(1)">한식</li>
                            <li value="2" @click="foodSelect(2)">일식</li>
                            <li value="3" @click="foodSelect(3)">중식</li>
                            <li value="4" @click="foodSelect(4)">양식</li>
                            <li value="5" @click="foodSelect(5)">기타</li>
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
    data() {
        return {
            // isStatusOn: true,
        }
    },
    components: {
        SideNav,
        MenuList,
    },
    methods: {
        foodSelect(a){
            if(a===1){
                store.state.selected = '한식'
            }
            else if(a===2){
                store.state.selected = '일식'
            }
            else if(a===3){
                store.state.selected = '중식'
            }
            else if(a===4){
                store.state.selected = '양식'
            }
            else if(a===5){
                store.state.selected = '기타'
            }
        },
        // SelectedToggle() {
        //     this.isStatusOn = !this.isStatusOn;
        // },

    }
}
</script>

<style lang="scss">
@import './MenuPage.scss';
</style>
