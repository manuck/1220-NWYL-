<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-wrapper">
            <Navbar />
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
        store.state.vueName.page = 'PortfolioNewPage';
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
