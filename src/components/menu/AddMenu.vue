<template>
    <div>
        <div class="wrap">
            <a id="modal-button" class="add-button" href="#menu-add-modal">
                메뉴 추가
            </a>
        </div>
        <!-- <div class="wrap">
            <button class="add-button">Submit</button>
        </div> -->
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
</style>
