<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field label="이름" v-model="user.name"></v-text-field>
    <v-text-field label="주소" v-model="user.address"></v-text-field>
    <v-text-field label="전화번호" v-model="user.phone"></v-text-field>
    <v-radio-group v-model="user.hasDog">
      <v-radio label="`반려견유`" :value="true"></v-radio>
      <v-radio label="`반려견무`" :value="false"></v-radio>
    </v-radio-group>
    <v-btn color="info" @click="update">수정</v-btn>
  </div>
</template>

<script>
import { eventBus } from '@/main'
export default {
  name: "testUpdate",
  // 부모에게 받은 값을 바로 가공하면 에러발생. 가공필요.
   props:['name','address','phone','hasDog'],
    data() {
      return{
        user:{}
      }
    // 부모 컴포넌트에서 props로 받은 값을 자식컴포넌트로 바꾼 뒤 사용하면 에러가 발생하지 않는다.
    },created(){
      this.user.name = this.name,
      this.user.address = this.address,
      this.user.phone = this.phone,
      this.user.hasDog = this.hasDog
   },
   methods:{
     update(){
      // 자식 컴포넌트에서 부모 컴포넌트로 보내는 것이 $emit()
      this.$emit("child",this.user)

      // eventBus 를 통해서 형제 컴포넌트에게 값을 전송할 수 있다.
      // eventBus가 하나의 부모 컴포넌트 역할을 하며  $emit를 통해서 신호를 받는다.
      // eventBus.$emit('userWasEdited', new Date()) 한개의 경우 전송 방법
      // main.js에 선언한 메소드로 전달
      eventBus.$emit('userWasEdited', new Date())
    }
   }
}
</script>
