<template>
    <div id="navbar">
      <LoginModal></LoginModal>
        <div class="navbar-fixed">
        <div class="navbar-wrapper">
            <div class="left">
                <router-link to="/">
                    <div class="navitems logo">
                        <img src="../../public/img/icons/favicon.png" style="width:30px; height:30px;"/>
                        <b style="margin: 0 10px;">Lim's Pasta</b>
                    </div>
                </router-link>
            </div>
            <div class="right">
                <v-btn @click.stop="drawer=!drawer">=</v-btn>
            </div>
        </div>
        </div>


        <v-navigation-drawer
            v-model="drawer"
            temporary
            right
            class="nav-drawer"
        >

            <router-link to="/portfolio">
                <div class="navitems">
                    Portfolio
                </div>
            </router-link>
            <router-link to="/post">
                <div class="navitems">
                    Post
                </div>
            </router-link>
           <!-- <router-link to="/login"> -->
                <div class="navitems" >
                    <LoginModal></LoginModal>
                </div>
          <!-- </router-link> -->

        </v-navigation-drawer>


    </div>


</template>

<script>

import LoginModal from './LoginModal'
export default {
    name: 'Navbar',
    components: {
      LoginModal
    },
    data: () => ({
      drawer: false,
      dialog: false
    }),
    methods: {
      on() {
        alert("hhhhhh");
      }
    }
}
</script>

<style>
#navbar {
    height: 72px;
    width: 100%;
    background-color: white;
}
.navbar-fixed {
    position: fixed;
    top: 0;
    height: inherit;
    width: 100%;
    background-color: #fafafa;
    z-index: 1;
}
.navbar-wrapper {
    display: flex;
    height: inherit;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
}
.left {
    display: flex;
    align-items: center;
}
.right {
    display: flex;
    align-items: center;
}
.navitems {
    display: flex;
    height: 72px;
    padding: 0 10px;
    align-items: center;
}
.navitems:hover {
    background-color: #c9c9c9;
}
.nav-drawer {
    position: fixed;
    top: 0;
    width: 250px;
    height: 100vh;
}

</style>
