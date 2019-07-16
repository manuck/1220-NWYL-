<template>
  <div style="height: 100%; width: 100%;">
    <div class="main-wrapper">
      <Navbar2 />
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
import Form from '../components/Form'
import Navbar2 from '../components/Navbar2'

export default {
	name: 'PortfolioNewPage',
	components: {
    Form,
    Navbar2,
	},
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
