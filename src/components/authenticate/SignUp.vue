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
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="closeSignUp">Close</v-btn>
            <v-btn flat @click="createUser(create_email, create_password)">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'

export default {
    props:
        ['dialog']
    ,
    data: () => ({
        create_email: '',
        form: false,
        isLoading: false,
        create_password: ''
    }),
    methods: {
        closeSignUp: function() {
          this.$emit('on-closeSignUp');
        },
        async createUser(email, password) {
            const result = await FirebaseService.createUserWithEmailAndPassword(email, password)
            if(result != null) {
                this.$emit('on-closeDialog');
                this.$refs.form.reset();
                //console.log(result.user.email);
            }
        }
    }
}
</script>
