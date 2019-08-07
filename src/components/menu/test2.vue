<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>이름:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{name}}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>주소:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{address}}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>phone:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{phone}}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>반려견유무:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{hasDogKr}}
        </v-list-tile-content>
      </v-list-tile>
        <v-list-tile>
        <v-list-tile-content>수정날짜:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{editedDate}}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>


<script>
import { eventBus } from '@/main'
export default {
  name: "test2",
  // 부모로부터 값을 받는 props
  props:[
      'name',
      'address',
      'phone',
      'hasDog'
  ],
  computed:{
    // 부모에게서 전달된 값을 this로 활용 가능.
    hasDogKr(){
      return this.hasDog === true ? '있음':'없음'
    }
  },
  methods:{
  },
  data(){
    return{
      editedDate: null
    }
  },
  created(){
    // 형제 컴포넌트에서 값을 받는 리스너 .. eventBus.$on('보낸요청값',(data)=>{})
    eventBus.$on('userWasEdited' ,(date) => {
      // userWasEdited를 통해 받은 데이터트 값을 받음
      this.editedDate = date
    });
  },
}
</script>
