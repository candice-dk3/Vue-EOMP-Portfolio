<template>
  <NavbarComp/>
  
  <FooterComp/>
  <router-view/>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'
// import FooterComp from './components/FooterComp.vue'

export default{
  components:{
    NavbarComp,
    // FooterComp
  }
}
</script>

<style>

#app {
  font-family: "Inknut Antiqua", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
