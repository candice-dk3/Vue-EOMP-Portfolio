<template>
  <section class="home-info">
    
    <div class="imgHome">
      <img :src="imageUrl" alt=""/>
      <div class="pic"></div>
      <div class="text">
        <h3>Candice Keet</h3>
        <h5>Aspiring Full Stack Developer</h5>
      </div>
    </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Home-Page.png?raw=true',
    };
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
  border: 5px solid black;
  color: white;
  border-radius: 50%;
width: 400px;
height: 350px;
position: absolute;
top: 40%;
margin-left: 300px;
}
.text{
  color: black;
  font-size: 50px;
  text-align: right;
  margin-top: -800px;
  margin-right: 90px;
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
  /* margin-top: -40px; */
  width: 100%;
  object-fit: cover;
}
.imgGH{
  display: flex;
  justify-content: space-between;
  width: 60px;
  height: 20px;
  margin-left: 100px;
}
.imgLK{
  display: flex;
  justify-content: space-between;
  width: 60px;
  height: 20px;
  margin-left: 1300px;
  margin-bottom: 400px;
}

</style>
