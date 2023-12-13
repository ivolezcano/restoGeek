<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class = "container">
    <NavBar />
    <router-view></router-view>
    <FooterComponent />
  </div>
  
</template>

<script>
import FooterComponent from '@/components/footer/Footer.vue'
import NavBar from '@/components/navbar/NavBar.vue'


export default {
  name: 'App',
  components: {
    FooterComponent,
    NavBar,
  }
}
</script>

<style>
@import './assets/css/global.css';
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
