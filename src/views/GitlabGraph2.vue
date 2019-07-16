<template>
    <div>
        <Navbar />
        <br />
        <GitlabGraph></GitlabGraph>
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
