<template>
    <a id="modal-button" href="#menu-add-modal">            
        <div class="menu-box" @mouseover="this.buttonHover" @mouseout="this.buttonUnHover" style="height: 350px; align-items: center; justify-content: center;">
            <img class="menu-add-button" src="../../assets/images/plus1.png"/>
        </div>
        <AddMenuModal></AddMenuModal>
    </a>
</template>

<script>
import AddMenuModal from './AddMenuModal'
import plusIcon from '@/assets/images/plus2.png'
import plusIcon1 from '@/assets/images/plus1.png'

export default {
    name: 'AddMenu',   
    props:{
    },
    components: {
        AddMenuModal,
    },
	methods: {
		buttonHover(element) {
            element.target.setAttribute('src', plusIcon);
        },
        buttonUnHover(element) {
            element.target.setAttribute('src', plusIcon1);
        }
    }
}
</script>

<style>
@import './AddMenu.scss';
</style>
