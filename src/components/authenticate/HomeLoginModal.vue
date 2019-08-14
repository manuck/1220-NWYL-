<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-layout wrap v-if="$store.state.accessToken" auth-wrapper>
                <v-flex @click="signOut" class="nav-icon logout">
                    <img src="@/assets/images/exit-door.png" style="width:100%;" alt="logout">
                </v-flex>
            </v-layout>
            <v-layout v-else auth-wrapper>
                <v-flex v-on="on" class="nav-icon login">
                    <img src="@/assets/images/key.png" style="width:100%;" alt="login">
                </v-flex>
            </v-layout>
        </template>

        <template v-if="sign === false">
            <v-card min-width="400px" @keyup.enter="loginWithEmailAndPassword(email, password)">
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
import SignUp from '@/components/authenticate/SignUp'

export default {
    name: 'HomeLoginModal',
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
        loginWithEmailAndPassword(email, password) {
            const result = FirebaseService.signInWithEmailAndPassword(email, password)
            this.dialog = false;
        },
        loginWithGoogle() {
            const result = FirebaseService.loginWithGoogle()
            this.dialog = false;
        },
        loginWithFacebook() {
            const result = FirebaseService.loginWithFacebook()
            this.dialog = false;
        },
        signOut() {
            FirebaseService.signOut();
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
</style>
