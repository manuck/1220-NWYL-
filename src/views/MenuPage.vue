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
                            <li @click="tagSelect(1);">볶음</li>
                            <li @click="tagSelect(2);">면</li>
                            <li @click="tagSelect(3);">국</li>
                            <li @click="tagSelect(4);">밥</li>
                            <li @click="tagSelect(5);">고기</li>
                            <li @click="tagSelect(6);">야채</li>
                            <li @click="tagSelect(7);">과일</li>
                            <li @click="tagSelect(8);">기타</li>
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
            koState: false,
            jaState: false,
            chState: false,
            weState: false,
            etState: false,
        }
    },
    components: {
        SideNav,
        MenuList,
    },
    mounted() {

	},
    methods: {
        foodSelect(a){
            if(a===1){
                if(this.koState===false){
                    store.state.selected = '한식'
                }
                else if(this.koState===true){
                    store.state.selected = ''
                }
            }
            else if(a===2){
                if(this.jaState===false){
                    store.state.selected = '일식'
                }
                else if(this.jaState===true){
                    store.state.selected = ''
                }
            }
            else if(a===3){
                if(this.chState===false){
                    store.state.selected = '중식'
                }
                else if(this.chState===true){
                    store.state.selected = ''
                }
            }
            else if(a===4){
                if(this.weState===false){
                    store.state.selected = '양식'
                }
                else if(this.weState===true){
                    store.state.selected = ''
                }
            }
            else if(a===5){
                if(this.etState===false){
                    store.state.selected = '기타'
                }
                else if(this.etState===true){
                    store.state.selected = ''
                }
            }
        },
        SelectedToggle(a) {
            if(a===1){
                if(this.koState===false){
                    this.koState = !this.koState
                    this.jaState = false
                    this.chState = false
                    this.weState = false
                    this.etState = false
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
                else{
                    this.koState = !this.koState
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
                // console.log(store.state.selectedState)
            }
            else if(a===2){
                if(this.jaState===false){
                    this.koState = false
                    this.jaState = !this.jaState
                    this.chState = false
                    this.weState = false
                    this.etState = false
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
                else{
                    this.jaState = !this.jaState
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
            }
            else if(a===3){
                if(this.chState===false){
                    this.koState = false
                    this.jaState = false
                    this.chState = !this.chState
                    this.weState = false
                    this.etState = false
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
                else{
                    this.chState = !this.chState
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
            }
            else if(a===4){
                if(this.weState===false){
                    this.koState = false
                    this.jaState = false
                    this.chState = false
                    this.weState = !this.weState
                    this.etState = false
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
                else{
                    this.weState = !this.weState
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
            }
            else if(a===5){
                if(this.etState===false){
                    this.koState = false
                    this.jaState = false
                    this.chState = false
                    this.weState = false
                    this.etState = !this.etState
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
                else{
                    this.weState = !this.weState
                    store.state.selectedState = this.koState || this.jaState || this.chState || this.weState || this.etState
                }
            }
        },
        // selectTag:[false, false, false, false, false, false, false, false]
        tagSelect(a){
            if(a===1){
                store.state.selectTag[0] = !store.state.selectTag[0]
                // console.log(store.state.selectTag)
                store.state.selectTag.push('asd')
                store.state.selectTag.pop()
            }
            else if(a===2){
                store.state.selectTag[1] = !store.state.selectTag[1]
                store.state.selectTag.push('asd')
                store.state.selectTag.pop()
                // console.log(store.state.selectTag)
            }
            else if(a===3){
                store.state.selectTag[2] = !store.state.selectTag[2]
                store.state.selectTag.push('asd')
                store.state.selectTag.pop()
                // console.log(store.state.selectTag)
            }
            else if(a===4){
                store.state.selectTag[3] = !store.state.selectTag[3]
                store.state.selectTag.push('asd')
                store.state.selectTag.pop()
                // console.log(store.state.selectTag)
            }
            else if(a===5){
                store.state.selectTag[4] = !store.state.selectTag[4]
                store.state.selectTag.push('asd')
                store.state.selectTag.pop()
                // console.log(store.state.selectTag)
            }
            else if(a===6){
                store.state.selectTag[5] = !store.state.selectTag[5]
                store.state.selectTag.push('asd')
                store.state.selectTag.pop()
                // console.log(store.state.selectTag)
            }
            else if(a===7){
                store.state.selectTag[6] = !store.state.selectTag[6]
                store.state.selectTag.push('asd')
                store.state.selectTag.pop()
                // console.log(store.state.selectTag)
            }
            else if(a===8){
                store.state.selectTag[7] = !store.state.selectTag[7]
                store.state.selectTag.push('asd')
                store.state.selectTag.pop()
                // console.log(store.state.selectTag)
            }
        },

    }
}
</script>

<style lang="scss">
@import './MenuPage.scss';
</style>
