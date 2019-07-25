<template>
    <div>
        <div class="leftnav-wrapper">
            <div class="nav-flex">
                <router-link to="/">
                    <div class="nav-icon home">
                        <img src="@/assets/images/home-1.png" style="width: 100%;" alt="home">
                    </div>
                </router-link>
                <div class="nav-icon team">
                    <img src="@/assets/images/group.png" style="width:100%;" alt="team">
                </div>
            </div>
        </div>
        <div class="rightnav-wrapper">
            <div class="nav-flex">
                <router-link to="/menu">
                    <div class="nav-icon menu">
                        <img src="@/assets/images/menu-1.png" style="width: 100%;" alt="menu">
                    </div>
                </router-link>
                <div class="nav-icon calendar">
                    <img src="@/assets/images/calendar.png" style="width:100%;" alt="calendar">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SideNav',
    components: {

    },
    props: {
   
    },
    created() {

    },
    mounted() {
      
    },
    methods: {
      
    }
}
</script>

<style lang="scss">
@import './SideNav.scss';
</style>
