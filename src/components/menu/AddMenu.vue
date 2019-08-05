<template>
    <div>
        <a id="modal-button" class="button" href="#menu-add-modal" @click="">
            메뉴 추가
        </a>
        <AddMenuModal></AddMenuModal>
    </div>
</template>

<script>
import AddMenuModal from './AddMenuModal'
import FirebaseService from '@/services/FirebaseService'

export default {
    name: 'AddMenu',   
    props:{
    },
    components: {
        AddMenuModal,
    },
    data() {
        return {
            menus: [],
        }
    },
	methods: {
		
    }
}
</script>

<style>

</style>
