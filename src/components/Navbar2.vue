<template>
    <div class="header-wrapper">
        <div class="header-flex">
            <div class="left">
                <div class="logo">
                    <router-link to="/">
                        NWYL
                    </router-link>
                </div>
            </div>
            <div class="right">
                <LoginModal/>

            </div>
        </div>
    </div>
</template>

<script>
import LoginModal from './LoginModal'

export default {
    name: 'Navbar2',
    components: {
        LoginModal,
    }
}
</script>
<style lang="scss">
    @import '../assets/sass/Navbar2.scss';
</style>
