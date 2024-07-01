<template>
  <nav class="navbar">
      <nav class="navbar-sect">
        <div class="container">
          <img :src="logoUrl" alt="My Logo" class="navbar-logo"/>
        </div>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/project">Project</router-link> 
      <router-link to="/skill">Skill</router-link> 
      <router-link to="/resume">Resume</router-link> 
      <router-link to="/testimonial">Testimonial</router-link> 
      <router-link to="/contact">Contact</router-link>
    </nav>
  </nav>
</template>
  
<script>
  export default {
    data() {
      return {
        logoUrl: 'https://github.com/candice-dk3/vueProjectImages/blob/main/CK.png?raw=true', // Replace with your actual image path
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
  width: 100%;
}
.navbar-logo {
  width: 60px;
  height: auto;
  position: fixed;
  margin-top: 0px;
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
  padding: 30px;
  background-color: #1A0129;
  text-align: right;
  width: 1500px;
  box-shadow: 0px 4px 2px #1A0129;
}

nav a {
  margin-left: 40px;
  color: white;
  font-size: 27px;
  text-decoration: none;
  margin-right: 20px;
}

nav a.router-link-exact-active {
  color: #FFF500;
}
</style>