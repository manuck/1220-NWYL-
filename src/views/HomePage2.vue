<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"></div>
        <div class="main-wrapper">
            <Navbar2 />
            <div class="body-wrapper">
                <div class="body-flex-c">
                    <div class="body-flex-r">
                        <ChangeBgImage/>
                    </div>
                </div>
            </div>
            <div class="footer-wrapper">
            </div>
        </div>
    </div>
</template>

<script>
import Navbar2 from '../components/Navbar2'
import ChangeBgImage from '../components/ChangeBgImage'

export default {
    name: 'pjt2',
    components: {
        Navbar2,
        ChangeBgImage,
    }
}
</script>
<style>
    @import '../assets/css/HomePage2.css';

    .main-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .body-wrapper {
        width: 100%;
        padding: 40px 40px;
    }
    .body-flex-c {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .body-flex-r {
        display: flex;
        width: 100%;
    }
</style>
