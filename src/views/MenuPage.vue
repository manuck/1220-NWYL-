<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <SideNav/>
            <div class="body-wrapper">
                <div class="menu-flex">
                    <div class="filter-wrapper">
                        <ul class="country">
                            <li value="1" @click="foodSelect(1); SelectedToggle(1)">한식</li>
                            <li value="2" @click="foodSelect(2); SelectedToggle(2)">일식</li>
                            <li value="3" @click="foodSelect(3); SelectedToggle(3)">중식</li>
                            <li value="4" @click="foodSelect(4); SelectedToggle(4)">양식</li>
                            <li value="5" @click="foodSelect(5); SelectedToggle(5)">기타</li>
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
            // koState: false,
            // jaState: false,
            // chState: false,
            // weState: false,
            // etState: false,
        }
    },
    components: {
        SideNav,
        MenuList,
    },
    mounted() {
        // this.getMenus()

        this.$store.watch(
            (state) => state.selected,
            (newValue, oldValue) => {
                console.log(`Updating from ${oldValue} to ${newValue}`);
                // console.log(store.state.selected)
                this.getSelectMenus(newValue)
                
            // Do whatever makes sense now
            // if (newValue === 'success') {
            // this.complex = {
            //     deep: 'some deep object',
            // };
            // }
        },
        );
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
        SelectedToggle(a) {
            if(a===1){
                store.state.kostate = !store.state.kostate
            }
            else if(a===2){
                store.state.jastate = !store.state.jastate
            }
            else if(a===3){
                store.state.chstate = !store.state.chstate
            }
            else if(a===4){
                store.state.westate = !store.state.westate
            }
            else if(a===5){
                store.state.etstate = !store.state.etstate
            }
        },

    }
}
</script>

<style lang="scss">
@import './MenuPage.scss';
</style>
