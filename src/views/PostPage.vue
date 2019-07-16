<template>
    <div>
        <Navbar />
        <TopButton />
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

export default {
    name: 'PostPage',
    components: {
        PostList,
        Navbar,
    },
    mounted() {
        console.log(this.$store.state.imgSrc)
    }
}
</script>
