<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <Navbar :ismain="false" />
            <TopButton />
            <div class="body-wrapper">
                <GitlabGraph class="gitlab"></GitlabGraph>
            </div>
            <div class="footer-wrapper">
            </div>
        </div>
    </div>
</template>

<script >
import GitlabGraph from '@/components/gitlab/GitlabGraph'
import Navbar from '@/components/mainview/Navbar'
import store from '@/store'

export default {
    name: 'GitlabGraph2',
    components: {
        GitlabGraph,
        Navbar,
    },
    mounted: () => {
        var cur_time = new Date();
        var uid = store.state.user.displayName;

        store.state.vueName.page = 'Gitlab_Graph';
        store.state.vueName.time = cur_time;
        store.state.vueName.userid = uid;
        store.dispatch('addLog');
    }
}
</script>

<style>
.gitlab{
    padding: 20px;
    border: 1px solid white;
    border-radius: 15px;
    background: white;
}
</style>