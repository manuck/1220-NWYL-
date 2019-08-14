<template>
    <div>
        <div class="leftnav-wrapper">
            <div class="nav-flex">
                <router-link to="/">
                    <div class="nav-icon home">
                        <img src="@/assets/images/home-1.png" style="width: 100%;" alt="home">
                    </div>
                </router-link>
                <button id="team-icon" class="nav-icon team">
                    <img src="@/assets/images/group.png" style="width:100%;" alt="team">
                </button>
                <router-link to="/admin" v-if="$store.state.admin == true">
                    <div class="nav-icon admin">
                        <img src="@/assets/images/admin.png" style="width:100%;" alt="admin">
                    </div>
                </router-link>
                <HomeLoginModal/>
            </div>
        </div>
        <div class="rightnav-wrapper">
            <div class="nav-flex">
                <router-link to="/menu">
                    <div class="nav-icon menu">
                        <img src="@/assets/images/menu-1.png" style="width: 100%;" alt="menu">
                    </div>
                </router-link>
                <router-link to="/weeklymenu">
                    <div class="nav-icon weeklymenu">
                        <img src="@/assets/images/calendar.png" style="width:100%;" alt="calendar">
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import HomeLoginModal from '@/components/authenticate/HomeLoginModal'

export default {
    name: 'SideNav',
    components: {
        HomeLoginModal,
    }
}
</script>

<style lang="scss">
@import './SideNav.scss';
</style>
