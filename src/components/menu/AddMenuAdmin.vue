<template>
    <div>
        <div id="modal-button" class="button admin-menuinfo-addmenu" @click="showAddMenuAdminModal">
            메뉴 추가
        </div>
        <AddMenuAdminModal :visible.sync="visible"/>
    </div>
</template>

<script>
import AddMenuAdminModal from './AddMenuAdminModal'
import FirebaseService from '@/services/FirebaseService'

export default {
    name: 'AddMenuAdmin',   
    props:{
    },
    components: {
        AddMenuAdminModal,
    },
    data() {
        return {
            menus: [],
            visible: false,
        }
    },
	methods: {
		showAddMenuAdminModal() {
            console.log('showaddmenuadminmodal 호출됨')
            this.visible = !this.visible
            console.log('this.showmodal', this.visible)
        }
    }
}
</script>

<style>
@import './AddMenuAdmin.scss';
</style>
