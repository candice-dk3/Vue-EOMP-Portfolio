<template>
    <footer id="footer">
      <div class="footer-row">
        <div class="row">
          <div class="col-4 justify-content-space-between" style="padding: 0px;">
            <div class="imgGH">
              <a href="https://github.com/candice-dk3" target="blank" class="card-github"><img :src="imgGH" alt=""/></a>
            </div>
          </div>
        <div class="col-4 justify-content-space-between" style="padding: 0px;">
          <div>
            <p class="cr-sec">&copy; Candice Keet {{ new Date().getFullYear() }} </p> 
          </div>
        </div>
        <div class="col-4 justify-content-space-between" style="padding: 0px;">
          <div class="imgLK">
            <a href="https://www.linkedin.com/in/candice-keet-06282a30a/" target="blank" class="card-linkedin"><img :src="imgLK" alt="LinkedIn"/></a>
          </div>
        </div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
    data() {
      return{
        imgGH: 'https://github.com/candice-dk3/vueProjectImages/blob/main/github.png?raw=true',
        imgLK: 'https://github.com/candice-dk3/vueProjectImages/blob/main/linkedin.png?raw=true'
      }
    }
}
</script>
<style>
#footer{
  width: 100%;
  background-color: #1A0129;
  color: white;
  font-size: 20px;
  text-align: center;
  height: 100px;
  position: sticky;
  padding: 0px;
} 

.cr-sec{
  margin-top: 40px;
}

.footer-row{
  width: 100%;
  margin-top: -40px;
}
.row{
  width: 100%;
}
.imgGH{
  width: 75px;
  height: 45px;
  margin-left: 200px;
  margin-top: 60px;
}
.imgLK{
  width: 60px;
  height: 20px;
  margin-top: 60px;
  margin-left: 250px;
}
</style>