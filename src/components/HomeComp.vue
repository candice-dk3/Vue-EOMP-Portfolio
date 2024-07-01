<template>
    <section class="home-info">
      <div class="imgHome">
        <img :src="imageUrl" alt="CK Logo"/>
        <div class="pic">
          <section class="hero-name-section">
            <div class="hero-name-div">
              <h3 class="name-text-h3">Candice Keet</h3>
              <h5 class="name-text-h5">Aspiring Full Stack Developer</h5>
              <div class="hero-name-button">
                <div class="about-btn">
                  
                    <a href="#About"><router-link to="/about">about me</router-link></a>
                </div> 
              </div>
            </div>
          </section>
        </div>
      </div>
  </section>
  <div class="bottom1"></div>
  </template>
  
  <script>
  import HomeComp from '@/components/HomeComp.vue';
  export default {
    data() {
      return {
        imageUrl: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Home-Page.png?raw=true',
      };
    },
    component: {
      HomeComp
      },
  }
  </script>
  <style>
  body::-webkit-scrollbar {
    display: none;
  }  
  body{
    display: block;
    margin: 0px;
  }
.pic{
    border: 10px solid #fff700b7;
    border-radius: 50%;
    background-color: #fff70033;
    width: 390px;
    height: 380px;
    position: absolute;
    top: 40%;
    margin-left: 300px;
}
  
.name-text-h3{
    color: white;
    font-size: 50px;
    text-align: right;
    margin-top: 100px;
    margin-right: -450px;
}

.name-text-h5{
    color: white;
    font-size: 34px;
    text-align: right;
    margin-top: 10px;
    margin-right: -590px;
}
  
.hero-name-button{
    position: absolute;
    border: 5px solid #fff700b7;
    border-radius: 50px;
    background-color: #320051;
    width: 200px;
    height: 50px;
    left: 600px;
    text-align: center;
    color: white;
    text-decoration: none;
}
  
.about-btn{
    text-align: center;
    color: white;
}

.home-info{
    color: white;
    font-size: 30px;
}
  
.imgHome {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
}
  
img{
    margin-top: -40px;
    width: 100%;
    object-fit: cover;
}
  
.bottom1{
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 140%
}
  
  </style>