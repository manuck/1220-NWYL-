<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-wrapper">
            <Navbar />
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

export default {
    name: 'GitlabGraph2',
    components: {
        GitlabGraph,
        Navbar,
    },
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