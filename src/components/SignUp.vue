<template outside-click>
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
      v-model="email"
      label="Email address"
      type="email"
    ></v-text-field>
      <v-text-field
        v-model="Password"
        label="Password"
        type="password"
      ></v-text-field>

    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat @click="closeDialog">Close</v-btn>
      <v-btn flat @click="createUser">Submit</v-btn>
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
      email: undefined,
      form: false,
      isLoading: false,
      password: undefined
    }),
    methods: {
      closeDialog: function() {
        this.$emit('on-closeSignUp');
      },
      async createUser() {
        const result = FirebaseService.createUserWithEmailAndPassword(this.email, this.password)
        console.log(result);
        //this.$emit('on-closeDialog');

      }
    }
  }
</script>
