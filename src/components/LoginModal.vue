
<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-layout wrap v-if="$store.state.accessToken">
          <v-flex> {{$store.state.user.displayName}} 님 환영합니다. </v-flex>
          <v-flex @click="signOut" class="login">LOGOUT</v-flex>
        </v-layout>
        <v-layout v-else>
          <v-flex v-on="on" class="login">LOGIN</v-flex>
        </v-layout>
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
                <v-text-field label="Email address" required v-model="email"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
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
          <v-btn flat @click="sign= true; email=''; password=''"> Sign Up</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false; sign=false; email=''; password='' ">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="loginWithEmailAndPassword(email, password); email=''; password=''">Login</v-btn>
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
      email: '',
      password: '',
      dialog: false,
      sign: false
    }),
    components:{
      SignUp
    },
    methods: {
      async loginWithEmailAndPassword(email, password) {
        const result = await FirebaseService.signInWithEmailAndPassword(email, password)
        this.dialog = false;
        //alert(result.credential.accessToken + " asdasd ")
        // console.log("emailAndpassword")
        // console.log(result.user.displayName)
      },
  		async loginWithGoogle() {
  			const result = await FirebaseService.loginWithGoogle()
        this.dialog = false;
        //alert(this.$store.state.accessToken + " asdasd " + this.$store.state.user)
        // console.log("google")
        // console.log(result)
  		},
      async loginWithFacebook() {
  			const result = await FirebaseService.loginWithFacebook()
        this.dialog = false;
        // console.log("facebook")
        // console.log(result)
  		},
      signOut() {
        FirebaseService.signOut();
        //console.log("로그아웃 !")
      },
      closeSignUp: function() {
        this.sign = false;
      },
      closeDialog: function() {
        this.dialog = false;
        this.sign = false;
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
