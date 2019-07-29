<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <div style="display: flex; justify-content:center; align-items:center; height: 100%;">
            <v-card
                 class="mx-auto"
                :flat="flat"
                :loading="loading"
                :outlined="outlined"
                :elevation="elevation"
                :raised="raised"
                :width="width"
                :height="height"
            >
                <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                    <v-card-title class="align-center fill-height">Add Admin Email</v-card-title>
                </v-img>

                <v-card-text>
                    <v-form class="pa-3 pt-4">
                        <v-text-field
                            v-model="admin_email"
                            label="Create Admin Email"
                            type="email"
                            required
                        ></v-text-field> 
                    </v-form>
                </v-card-text>

                <v-card-actions>

                    <v-btn @click="createAdmin(admin_email)">Make Admin</v-btn>
                </v-card-actions>
            </v-card>
            </div>
      </div>
    </div>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'

export default {
    name: 'AdminPage',
    data: () => ({
      flat: false,
      media: true,
      loading: false,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 400,
      height: undefined,
      admin_email: ''
    }),
    methods: {
        createAdmin(email) {
            const result = FirebaseService.createAdmin(email)
            this.$data.admin_email = ''
        }
    }
}
</script>

<style lang="scss">
@import './MenuPage.scss';
</style>
