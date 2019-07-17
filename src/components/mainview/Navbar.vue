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
import LoginModal from '@/components/authenticate/LoginModal'

export default {
    name: 'Navbar',
    components: {
        LoginModal,
    },
    props: {
        ismain: {type: Boolean, default: false},
    },
    mounted() {
        if (this.ismain) {
            document.querySelector('.header-wrapper').style.display = "none";
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/sass/Navbar.scss';
</style>
