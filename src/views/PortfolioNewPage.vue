<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <Navbar :ismain="false"/>
            <div class="body-wrapper">
                <div class="form-box">
                    <Form/>
                </div>
            </div>
            <div class="footer-wrapper">
            </div>
        </div>
    </div>
</template>

<script>
import Form from '@/components/portfolio/Form'
import Navbar from '@/components/mainview/Navbar'
import store from '@/store'

export default {
    name: 'PortfolioNewPage',
    components: {
        Form,
        Navbar,
    },
    mounted: () => {
        // var cur_time = new Date();
        // var uid = store.state.user.displayName;

        store.state.vueName.page = 'PortfolioNewPage';
        // store.state.vueName.time = cur_time;
        // store.state.vueName.userid = uid;
        store.dispatch('addLog');
    }
}
</script>

<style>
.form-box {
    padding: 20px;
    border: 1px solid white;
    border-radius: 15px;
    background: white;
}
</style>
