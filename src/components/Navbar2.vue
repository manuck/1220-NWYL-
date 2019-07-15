<template>
    <div class="header-wrapper">
        <div class="header-flex">
            <div class="left">
                <div class="logo">
                    <a href="">
                        NWYL
                    </a>
                </div>
            </div>
            <div class="right">
                <!-- <div class="gitlab">
                    <a href="">
                        GITLAB
                    </a>
                </div>
                <div class="weather">
                    <a href="">
                        WEATHER
                    </a>
                </div> -->
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
<style>
    @import '../assets/css/Navbar2.css';
</style>
