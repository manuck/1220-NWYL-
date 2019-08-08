<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                <v-data-table
                :headers="header"
                :items="members"
                :pagination.sync="pagination" 
                sort-icon="arrow_drop_down"
                prev-icon="navigate_before"
                next-icon="navigate_next"
                >
                    <template slot="items" slot-scope="props">
                        <td ><v-img :src="gravatarURL(props.item.email)"></v-img></td>
                        <td>{{props.item.displayName}}</td>
                        <td>{{props.item.email}}</td>
                        <td>{{props.item.tokensValidAfterTime | convertDate}}</td>
                        <td v-if="props.item.customClaims!=null"><v-icon>build</v-icon></td>
                        <td v-else><v-icon>person</v-icon></td>
                        <td v-if="props.item.customClaims==null"><v-icon @click="test()">add</v-icon></td>
                        <td v-else><v-icon>lock</v-icon></td>
                        <td  v-if="props.item.customClaims==null"><v-icon>delete</v-icon></td>
                        <td v-else><v-icon>lock</v-icon></td>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
let md5 = require('md5')
import FirebaseService from '@/services/FirebaseService'
import { format } from 'path';

export default {
    props: ['members', 'member'],
    data: ()=>{
         return {
             header: [
                {text: 'Icon', value:'', sortable:false},
                {text: 'Name', value: 'displayName', sortable:false},
                {text: 'Email', value: 'email', sortable:false},
                {text: 'CreateDate', value: 'tokensValidAfterTime', sortable:false},
                {text: 'Claim', value: 'customClaims', sortable: true},
                {text: 'Authorize', sortable:false},
                {text: 'Kick out' , sortable:false}
            ],
            pagination: {
                rowsPerPage: 10
            }
        }
    },

    methods: {
        gravatarURL(email) {
            return `http://www.gravatar.com/avatar/${md5(email)}?s=150&d=retro`
        },
        test() {
            alert("hi")
        }
    },
    filters: {
        convertDate: function(value) {
            const result = new Date(value)
            var year = result.getFullYear()
            var month = result.getMonth()
            var date = result.getDate()     
            return year + '/' + month + '/' + date
        }
    }

}
</script>
