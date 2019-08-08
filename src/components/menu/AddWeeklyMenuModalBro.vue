<template>
<div>
  <div>
      <div id="uploaded-menu">
          <table>
              <thead>
                  <tr>
                      <td></td>
                      <td>월</td>
                      <td>화</td>
                      <td>수</td>
                      <td>목</td>
                      <td>금</td>
                  </tr>
                  <tr id="menu-date"/>
              </thead>
              <tbody>
                  <tr id="menu-korean"/>
                  <tr id="menu-star"/>
                  <tr id="menu-special"/>
              </tbody>
          </table>
      </div>
  </div>
  <!-- {{date}} -->
</div>
</template>

<script>
// const testdata = require('./5thJul2019.json')
import { eventBus1 } from '@/main'
import AddWeeklyMenuModal from './AddWeeklyMenuModal'

export default {
    name: "AddWeeklyMenuModalBro",
    props: {
        // 부모로부터 값을 받는 props
        // 'date',
        // 'korean',
        // 'star',
        // 'special',
    },
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
            // menuSended를 통해 받은 데이터 값을 받음
            this.receiveDate = date
            console.log('this.receiveData')
        })
    }
}
</script>
