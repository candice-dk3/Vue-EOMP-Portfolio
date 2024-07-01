<template>
    <footer id="footer">
    <div class="row">
      <div class="col-4 justify-content-space-between">
        <div class="imgGH">
          <img :src="imgGH" alt=""/>
        </div>
      </div>
    <div class="col-4 justify-content-space-between">
      <div>
        <p class="cr-sec">© Candice Keet 2024</p> 
      </div>
    </div>
    <div class="col-4 justify-content-space-between">
      <div class="imgLK">
        <img :src="imgLK" alt=""/>
      </div>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
    
}
</script>
<style>
#footer{
  position: relative;
  width: 100%;
  background-color: #1A0129;
  color: white;
  font-size: 20px;
  text-align: center;
  margin-top: -100px;
} 
</style>