
<template >
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <div v-on="on">Login</div>
      </template>
      <v-card min-width="400px">
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>

              <!-- google login -->
              <v-flex xs12 text-xs-center>
                <v-btn round color="#df4a31" dark v-on:click="loginWithGoogle" style="width:60%;"><v-icon size="25" class="mr-2">fa-google</v-icon> Google 로그인</v-btn>
              </v-flex>

              <!-- facebook login -->
              <v-flex xs12 text-xs-center>
                <v-btn round color="#1a0dab" dark  style="width:60%;"><v-icon size="25" class="mr-2">fa-facebook</v-icon> FaceBook 로그인</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script>

import FirebaseService from '@/services/FirebaseService'

  export default {
    name: 'LoginModal',
    data: () => ({
      dialog: false
    }),
    methods: {
  		async loginWithGoogle() {
  			const result = await FirebaseService.loginWithGoogle()
  			this.$store.state.accessToken = result.credential.accessToken
  			this.$store.state.user = result.user
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
