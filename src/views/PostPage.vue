<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <Navbar :ismain="false"/>
            <div class="body-wrapper">
                <div class="post-wrapper">
                    <router-link to="post/new" class="post-title">
                        <span class="button-rounded">
                            Write Post
                        </span>
                    </router-link>
                    <div class="post-flex-r">
                        <PostList :limits="6" :load-more="true"></PostList>
                    </div>
                </div>
            </div>
            <div class="footer-wrapper">
            </div>
        </div>
    </div>
</template>

<script>
import PostList from '@/components/post/PostList'
import Navbar from '@/components/mainview/Navbar'
// import store from '@/store'

export default {
    name: 'PostPage',
    components: {
        PostList,
        Navbar,
    },
    mounted() {
//         console.log(this.$store.state.imgSrc)
//         var cur_time = new Date();
//         var uid = store.state.user.displayName;
//
//         store.state.vueName.page = 'PostPage';
//         store.state.vueName.time = cur_time;
//         store.state.vueName.userid = uid;
//         store.dispatch('addLog');
    },
}
</script>

<style>
.post-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.post-title {
    display: flex;
}
.button-rounded {
    color: white;
    border: 1px solid white;
    border-radius: 25px;
    padding: 7px 20px;
    background: rgba(255,255,255,0);
    transition: background 1s;
    transition: color 1s;
}
.button-rounded:hover {
    background: rgba(255,255,255,0.8);
    color: black;
}
</style>
