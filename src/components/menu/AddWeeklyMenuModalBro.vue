<template>
<div>
  <!-- <AddWeeklyMenuModal/> -->
  {{date}}
</div>
</template>

<script>
// const testdata = require('./5thJul2019.json')
import { eventBus } from '@/main'
import AddWeeklyMenuModal from './AddWeeklyMenuModal'

export default {
    name: "AddWeeklyMenuModalBro",
    props: [
        // 부모로부터 값을 받는 props
        'date',
        'korean',
        'star',
        'special',
    ],
    computed: {
        // 부모에게서 전달된 값을 this로 활용 가능.
    },
    data() {
        return {
            receiveData:null
        }
        console.log('receiveData:null')
    },
    mounted() {

    },
    methods: {

    },
    created() {
        // 형제 컴포넌트에서 값을 받는 리스너 .. eventBus.$on('보낸요청값' ,(date) => {})
        eventBus.$on('menuSended' ,(date) => {
            // menuSended를 통해 받은 데이터트 값을 받음
            this.receiveDate = date
            console.log('this.receiveData')
        })
    }
}
</script>
