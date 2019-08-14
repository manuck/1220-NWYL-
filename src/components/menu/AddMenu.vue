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
<<<<<<< HEAD
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-button {
  width: 140px;
  height: 45px;
  line-height: 45px;
  font-size: 11px;
  letter-spacing: 2.5px;
  font-weight: 500;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  }

.add-button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
=======
@import './AddMenu.scss';
>>>>>>> 365f4d7eadb9ff84287c3068a6513873ac22fedd
</style>
