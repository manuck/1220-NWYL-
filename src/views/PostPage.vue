<template>
    <div>
        <Navbar :ismain="false"/>
        <v-container>
            <!-- Post -->
            <v-layout>
                <v-flex xs12>
                   <PostList :limits="6" :load-more="true"></PostList>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import PostList from '@/components/post/PostList'
import Navbar from '@/components/mainview/Navbar'
import store from '@/store'

export default {
    name: 'PostPage',
    components: {
        PostList,
        Navbar,
    },
    mounted() {
        console.log(this.$store.state.imgSrc)
        var cur_time = new Date();
        var uid = store.state.user.displayName;

        store.state.vueName.page = 'PostPage';
        store.state.vueName.time = cur_time;
        store.state.vueName.userid = uid;
        store.dispatch('addLog');
    }
}
</script>
