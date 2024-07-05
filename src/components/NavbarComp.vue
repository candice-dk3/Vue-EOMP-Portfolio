<template>
  <nav class="navbar">
      <nav class="navbar-sect">
        <div class="container">
          <a href="#home">
           <img :src="logoUrl" alt="My Logo" class="navbar-logo"/> 
          </a>
        </div>
        <nav class="nav justify-content-end">
          <li class="nav-item">
            <a href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a href="#about">About</a>
          </li>
          <li class="nav-item">
            <a href="#project">Project</a>
          </li>
          <li class="nav-item">
            <a href="#skill">Skill</a> 
          </li>
          <li class="nav-item">
            <a href="#resume">Resume</a>
          </li>
          <li class="nav-item">
            <a href="#testimonial">Testimonial</a>
          </li>
          <li class="nav-item">
            <a href="#contact">Contact</a>
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
  z-index: 50;
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
  position: relative;
  color: white;
  font-size: 27px;
  text-decoration: none;
  margin-right: 20px;
  margin-left: 20px;
}

nav a:focus {
  color: #FFF500;
}

.nav-item{
  margin-top: 20px;
}

nav a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1.5px;
  background-color: #FFF500;
  transition: width 0.5s ease-in-out;
}

nav a:hover::after {
  width: 100%;
}

.navbar-scrolled {
  background-color: transparent;
}
</style>