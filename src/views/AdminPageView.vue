<template>
    <div>
        <AdminAside v-on:state="changeState"/>
        <div class="admin-content">
            <AdminDashBoard />
            <AdminPageInfo />
            <AdminUserInfo />
            <AdminMenuInfo />
            <AdminPageLog />
        </div>
    </div>
</template>

<script>
import AdminAside from '@/components/admin/AdminAside'
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
        AdminDashBoard,
        AdminPageInfo,
        AdminUserInfo,
        AdminMenuInfo,
        AdminPageLog
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
@import './AdminPageView.scss';
</style>
