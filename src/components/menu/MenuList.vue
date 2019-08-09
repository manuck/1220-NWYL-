<template>
    <div>
        <div class="menulist-wrapper">
            <MenuBox v-for="menu in menus" :menu="menu" :key="menu.id" v-bind:ID="menu.id"/>
            <MenuModal v-show="$store.state.menuname!==''" />
            <EditMenuModal></EditMenuModal>
            <AddMenu v-if="$store.state.admin===true"></AddMenu>
        </div>
    </div>
</template>

<script>
import MenuBox from './MenuBox'
import MenuModal from './MenuModal'
import AddMenu from './AddMenu'
import EditMenuModal from './EditMenuModal'
import store from '@/store.js'
import FirebaseService from '@/services/FirebaseService'

export default {
    name: 'MenuList',   
    props:{
        comment: {type: String},
		score: {type: Number},
    },
    components: {
        MenuBox,
        MenuModal,
        AddMenu,
        EditMenuModal,
    },
    data() {
        return {
            menus: [],
            mytag: [],
            tags: ["볶음", "면", "국", "밥", "고기", "야채", "과일", "기타"]
        }
    },
    watch() {

    },
	mounted() {
        this.getMenus()
        // console.log('유저가 누구?')
        // console.log(this.$store.state.user.uid)
        // console.log(this.$store.state.admin)
        this.$store.watch(
            (state) => state.selected,
            (newValue, oldValue) => {
                console.log(`Updating from ${oldValue} to ${newValue}`);
                if (newValue===""){
                    this.getMenus()
                }
                else{
                // console.log(store.state.selected)
                this.getSelectMenus(newValue)
                }
        },
        );
        this.$store.watch(
            (state) => state.selectedState,
            (newValue, oldValue) => {
                console.log(`Updating from ${oldValue} to ${newValue}`);
                // console.log(store.state.selected)
                if(newValue===false){
                    this.getMenus()
                }
        },
        );
        this.$store.watch(
            (state) => state.selectTag,
            (newValue, oldValue) => {
                console.log(`Updating from ${oldValue} to ${newValue}`);
                this.mytag = []
                this.menus = []
                for(var i in store.state.selectTag) {
                    if(store.state.selectTag[i]===true) {
                        console.log(this.tags[i])
                        this.mytag.push(this.tags[i])
                    }
                }
                // console.log(this.mytag)
            // this.getSelectTags(this.tags)


        },
        );

	},
	methods: {
		async getMenus() {
            this.menus = await FirebaseService.getMenus()
        },
        async getSelectMenus(a) {
            this.menus = await FirebaseService.getSelectMenus(a)
        },
        async getSelectTags(a) {
            this.menus = await FirebaseService.getSelectTags(a)
        }
    }
}
</script>

<style lang="scss">
@import './MenuList.scss';
</style>
