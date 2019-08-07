<template>
    <v-card>
        <v-list>
            <v-chip
            v-for="(member, i) in members"
            :key="i"
            >
                <v-list-tile-avatar>
                     <v-img :src="gravatarURL(member.email)"></v-img>
                </v-list-tile-avatar>
                <v-list-tile-title
                 v-html="member.displayName"
                >
                </v-list-tile-title>
                <v-list-tile-title
                v-html="member.email"   
                >
                </v-list-tile-title>
                <v-list-tile-title
                v-html="member.tokensValidAfterTime"
                >
                </v-list-tile-title>
                <v-list-tile-title v-if="member.customClaims"
                v-html="member.customClaims.admin">
                </v-list-tile-title>
                <v-list-tile-title v-else
                v-html="false">
                </v-list-tile-title>
                <v-icon>add</v-icon>
                <v-icon>delete</v-icon>                   

            </v-chip>
        </v-list>
        
    </v-card>
</template>

<script>
let md5 = require('md5');

export default {
    props: ['members', 'member'],
    methods: {
        gravatarURL(email) {
            return `http://www.gravatar.com/avatar/${md5(email)}?s=150&d=retro`
        }
    }

}
</script>
