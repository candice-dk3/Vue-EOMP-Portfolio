<template>
  <nav class="navbar">
      <nav class="navbar-sect">
        <div class="container">
          <router-link to="/">
           <img :src="logoUrl" alt="My Logo" class="navbar-logo"/> 
          </router-link>
        </div>
        <nav class="nav justify-content-end">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a href="#About"><router-link to="/about">About</router-link></a>
          </li>
          <li class="nav-item">
            <a href="#Project"><router-link to="/project">Project</router-link></a>
          </li>
          <li class="nav-item">
            <a href="#Skill"><router-link to="/skill">Skill</router-link></a> 
          </li>
          <li class="nav-item">
            <a href="#Resume"><router-link to="/resume">Resume</router-link></a>
          </li>
          <li class="nav-item">
            <a href="#Testimonial"><router-link to="/testimonial">Testimonial</router-link></a>
          </li>
          <li class="nav-item">
            <a href="#Contact"><router-link to="/contact">Contact</router-link></a>
          </li>
        </nav>
      </nav>
  </nav>
</template>
  
<script>
  export default {
    data() {
      return {
        logoUrl: 'https://github.com/candice-dk3/vueProjectImages/blob/main/CK.png?raw=true'
      };
    },
  };

</script>
  
<style>
.container {
  display: flex;
  justify-content: space-between;
}
.navbar-sect {
  position: fixed;
  margin-top: 70px;
  width: 100%;
}
.navbar-logo {
  width: 100px;
  height: 150px;
  position: fixed;
  left: 20px;
  top: 5px;
}
#app {
  font-family: "Inknut Antiqua", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar-sect {
  height: 90px;
  background-color: #1A0129;
  text-align: right;
  width: 100%;
  box-shadow: 0px 4px 2px #12011d;
}

nav a {
  margin-left: 10px;
  color: white;
  font-size: 27px;
  text-decoration: none;
  margin-right: 20px;
}

nav a.router-link-exact-active {
  color: #FFF500;
}

.nav-item{
  margin-top: 20px;
}
</style>