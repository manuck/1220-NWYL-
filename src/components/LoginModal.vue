
<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <div v-on="on">Login</div>
      </template>
      <template v-if="sign === false">
      <v-card min-width="400px">
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email address" required v-model="email" type="email"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required v-model="password" type="password"></v-text-field>
              </v-flex>


              <!-- google login -->
              <v-flex xs12 text-xs-center>
                <v-btn round color="#df4a31" dark v-on:click="loginWithGoogle" style="width:60%;"><v-icon size="25" class="mr-2">fa-google</v-icon> Google 로그인</v-btn>
              </v-flex>

              <!-- facebook login -->
              <v-flex xs12 text-xs-center>
                <v-btn round color="#1a0dab" dark v-on:click="loginWithFacebook" style="width:60%;"><v-icon size="25" class="mr-2">fa-facebook</v-icon> Facebook 로그인</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn flat @click="sign= true"> Sign Up</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false; sign=false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false; sign=false">Login</v-btn>
        </v-card-actions>
      </v-card>
    </template>
      <template v-if="sign === true">
        <SignUp
          v-on:on-closeSignUp="closeSignUp"
          v-on:on-closeDialog="closeDialog"
          ></SignUp>
      </template>
    </v-dialog>

</template>

<script>

import FirebaseService from '@/services/FirebaseService'
import SignUp from './SignUp'

  export default {
    name: 'LoginModal',
    data: () => ({
      email: undefined,
      password: undefined,
      dialog: false,
      sign: false
    }),
    components:{
      SignUp
    },
    methods: {
      async loginWithEmailAndPassword() {
        const result = await FirebaseService.loginWithEmailAndPassword(this.email, this.password)
        this.$store.state.accessToken = result.credential.accessToken
  			this.$store.state.user = result.user
        this.dialog = false;
        console.log("emailAndpassword")
        console.log(result)
      },
  		async loginWithGoogle() {
  			const result = await FirebaseService.loginWithGoogle()
  			this.$store.state.accessToken = result.credential.accessToken
  			this.$store.state.user = result.user
        this.dialog = false;
        console.log("google")
        console.log(result)
  		},
      async loginWithFacebook() {
  			const result = await FirebaseService.loginWithFacebook()
  			this.$store.state.accessToken = result.credential.accessToken
  			this.$store.state.user = result.user
        this.dialog = false;
        console.log("facebook")
        console.log(result)
  		},
      closeSignUp: function() {
        this.sign = false;
      },
      closeDialog: function() {
        this.dialog = false;
      }

  }
}
</script>

<style>
.navitems {
    display: flex;
    height: 72px;
    padding: 0 10px;
    align-items: center;
    cursor: pointer;
    color: #3f51b5;
}
</style>
