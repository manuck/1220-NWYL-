<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <test2
        :name="name"
        :address="address"
        :phone="phone"
        :hasDog="hasDog"
        ></test2>
      </v-flex>
      <v-flex xs12 sm6>
        <test1
        :name="name"
        :address="address"
        :phone="phone"
        :hasDog="hasDog"
        @child="parents"
        ></test1>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import test1 from "@/components/menu/test1"
import test2 from "@/components/menu/test2"

export default {
  name: "test3",
  components: {
    test1,
    test2,
  },
  data (){
    return{
      name: 'john',
      address: 'test_address',
      phone:'070-4358-6643',
      hasDog: true,
    }
  },
  methods :{
// 형제 컴포넌트 2에서 전송된 this.user 를 통해서 값을 받는다.
    parents(user) {
      this.name=user.name
      this.address=user.address
      this.phone=user.phone
      this.hasDog=user.hasDog
    }
  }
}
</script>
