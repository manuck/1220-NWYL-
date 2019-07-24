<template>
    <v-card min-width="400px">
        <v-card-title>
            <span class="headline">Sign Up</span>
        </v-card-title>
        <v-form
          ref="form"
          v-model="form"
          class="pa-3 pt-4"
        >
            <v-text-field
              v-model="create_email"
              label="Email address"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="create_password"
              label="Password"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="create_name"
              label="Name"
              type="text"
              required
            ></v-text-field>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn flat @click="resetForm">Clear</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="closeSignUp">Close</v-btn>
            <v-btn flat @click="createUser(create_email, create_password, create_name)">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'
import store from '@/store'
import firebase from 'firebase/app'

export default {
    props:
        ['dialog']
    ,
    data: () => ({
        create_email: '',
        form: false,
        create_password: '',
        create_name: '',
    }),
    methods: {
        closeSignUp: function() {
          this.$emit('on-closeSignUp');
        },
        async createUser(email, password, name) {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password).then(
			async (result) => {
				await result.user.updateProfile({
					displayName : name
				}).then(
					async () => {
						await console.log("update 실행")
						await store.dispatch('getUser', result.user.displayName)
                        await console.log("update 반영완료")
                        await store.dispatch('', result.user)
                        await console.log("emit 후에 찍혀야지")
					}
				)
			}
		)
            
            
                this.resetForm
            
        }, 
        resetForm() {
            this.$refs.form.reset()
        }
    }
}
</script>
