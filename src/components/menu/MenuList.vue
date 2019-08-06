<template>
    <div>
        <div class="menulist-wrapper">
            <MenuBox v-for="menu in menus" :menu="menu" :key="menu.id" v-bind:ID="menu.id"/>
            <MenuModal />
            <AddMenu v-if="$store.state.admin===admin"></AddMenu>
        </div>
    </div>
</template>

<script>
import MenuBox from './MenuBox'
import MenuModal from './MenuModal'
import AddMenu from './AddMenu'
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
    },
    data() {
        return {
            menus: [],
        }
    },
	mounted() {
        this.getMenus()
        console.log($store.state.admin)
	},
	methods: {
		async getMenus() {
            this.menus = await FirebaseService.getMenus()
		},
    }
}
</script>

<style lang="scss">
@import './MenuList.scss';
</style>
