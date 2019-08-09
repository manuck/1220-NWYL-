<template>
    <div>
        <AdminAside v-on:state="changeState"/>
        <div class="admin-content">
            <AdminDashBoard v-if="($store.state.contentstate === 'admin-dashboard') || ($store.state.contentstate === '') "/>
            <AdminPageInfo v-if="$store.state.contentstate === 'admin-pageinfo'"/>
            <AdminUserInfo v-if="$store.state.contentstate === 'admin-userinfo'"/>
            <AdminMenuInfo v-if="$store.state.contentstate === 'admin-menuinfo'"/>
            <AdminPageLog v-if="$store.state.contentstate === 'admin-pagelog'"/>
        </div>
    </div>
</template>

<script>
import AdminAside from '@/components/admin/AdminAside'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminDashBoard from '@/components/admin/AdminDashBoard'
import AdminPageInfo from '@/components/admin/AdminPageInfo'
import AdminUserInfo from '@/components/admin/AdminUserInfo'
import AdminMenuInfo from '@/components/admin/AdminMenuInfo'
import AdminPageLog from '@/components/admin/AdminPageLog'
import store from '@/store.js'

export default {
    name: 'AdminPage',
    components: {
        AdminAside,
        AdminHeader,
        AdminDashBoard,
        AdminPageInfo,
        AdminUserInfo,
        AdminMenuInfo,
        AdminPageLog
    },
    data() {
        return {
            contentstate: "",
        }
    },
    methods: {
        changeState(received) {
            store.state.contentstate = received
        }
    }
}
</script>

<style lang="scss">
@import './AdminPageView.scss';
</style>
