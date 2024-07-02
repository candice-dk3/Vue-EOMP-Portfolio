<template>
    <section class="about-us-main-section" id="About">
      <div class="imgAbout">
         <img :src="imgUrlAbout" alt=""/>
         <section class="about-us-inner-sec container">
            <h1 class="about-h1">Who is Candice?</h1>
            <section class="about-dm-sec container myAboutCard">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3" id="about-dm">
                      <div>
                      </div>
                        <div class="about-detail-div">
                            <h6 class="heading-p">
                            <h4>Full Name:</h4>
                            </h6>
                            <p class="body-p"></p>

                            <h6 class="heading-p">
                            <h4>Date of Birth:</h4>
                            </h6>
                            <p class="body-p"></p>

                            <h6 class="heading-p">
                            <h4>Email:</h4>
                            </h6>
                            <p class="body-p"></p>

                            <h6 class="heading-p">
                            <h4>Address:</h4>
                            </h6>
                            <p class="body-p"></p>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-5" id="about-me">
                      <div class="about-me-div">
                        <h1 class="about-me-h1">About me</h1>
                        <p class="about-dc"></p>
                          </div>
                        <div class="col-1"></div>
                    </div>
                </div>
            </section>
          </section>
        </div>
    </section>

<div class="bottom2"></div>
</template>

<script>
export default {
  data(){
    return{
      imgUrlAbout: 'https://github.com/candice-dk3/vueProjectImages/blob/main/About-Page.png?raw=true',
    }
  }
  //   computed: {
  //   aboutMe() {
  //     return this.$store.state.aboutMe
  //   }
  // },
  // mounted() {
  //   this.$store.dispatch('getAboutMe')
  // }
}
</script>
<style>
/* .imgAbout{
  } */
.imgAbout {
  margin-top: 1089px;
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

h4, .body-p{
  text-indent: 10%;
}
.about-h1{
  position: absolute;
  color: white;
  font-size: 40px;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 50px;
  top: 155%;
}
.about-me-h1 {
  text-indent: 10%;
  color: white;
  margin-top: 20px;
  top: 150%;
}

.about-detail-div {
  color: white;
  font-size: 24px; 
  margin-top: 80px;
  top: 150%;
}

.about-dc{
  color: white;
  font-size: 19px;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  top: 150%;
}
#about-dm, #about-me {
  position: absolute;
  background-color: #fff70044;
  border-radius: 30px;
  margin-top: 60px;
  height: 550px;
  top: 180%;
}

.col-5{
  margin-left: 600px;
}
.bottom2{
  position: absolute;
  background: #1A0129;
  margin-top: 1px;
  width: 100%;
  height: 80px;
  bottom: -200%;
}
</style>
