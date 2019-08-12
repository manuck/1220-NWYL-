<template>
    <div>
        <!-- <AdminAside v-on:state="changeState"/> -->
        <AdminAside />
        <div class="admin-content">
            <AdminDashBoard />
            <AdminUserInfo />
            <AdminMenuInfo />
            <AdminWeeklyMenu />
            <AdminPageLog />
        </div>
    </div>
</template>

<script>
import AdminAside from './AdminAside'
import AdminDashBoard from './AdminDashBoard'
import AdminUserInfo from './AdminUserInfo'
import AdminMenuInfo from './AdminMenuInfo'
import AdminWeeklyMenu from './AdminWeeklyMenu'
import AdminPageLog from './AdminPageLog'
import store from '@/store.js'

export default {
    name: 'AdminPage',
    components: {
        AdminAside,
        AdminDashBoard,
        AdminUserInfo,
        AdminMenuInfo,
        AdminWeeklyMenu,
        AdminPageLog
    },
}
</script>

<style lang="scss">
@import './AdminPageView.scss';
</style>
