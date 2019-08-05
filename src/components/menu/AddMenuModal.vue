<template>
    <div id="menu-add-modal" class="modal-wrapper">
        <a href="#" class="modal-back"/>
        <div class="modal-box">
            <v-form>
                
                <div class="submit-area">
                    <button id="formButton" @click="" class="form-button" type="button">제출</button>
                </div>
            </v-form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import store from '@/store.js'
import { firestore } from '@/services/FirebaseService'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

const db = firebase.firestore();

export default {
    name: 'AddMenuModal',
    props: {
    },
    data() {
        return {
            title: '',
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
@import './AddMenuModal.scss';
</style>



