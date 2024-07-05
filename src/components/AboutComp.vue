<template>
  <section class="about-us-main-section" id="about">
    <div class="imgAbout">
      <img :src="imgUrlAbout" alt="" />
      <section class="about-us-inner-sec container">
        <h1 class="about-h1">Who is Candice?</h1>
        <section class="about-dm-sec container myAboutCard">
          <div class="row">
            <div class="about">
              <div class="col-3" id="about-dm">
                <div class="about-detail-div">
                  <div class="heading-p">
                    <h3>Full-Name:</h3>
                    <br>
                    <h3>Date of birth:</h3>
                    <br>
                    <h3>Email:</h3>
                    <br>
                    <h3>Address:</h3>
                    <br>
                  </div>
                  <div class="body-p">
                    <div  v-for="about in $store.state.about" :key="about.id">
                      <h5>{{about.name}}</h5>
                      <br><br>
                      <h5>{{about.dOB}}</h5>
                      <br>
                      <h5>{{about.email}}</h5>
                      <br><br>
                      <h5>{{about.address}}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-5" id="about-me">
                <div class="about-me-div">
                  <h1 class="about-me-h1">About me</h1>
                  <h4 class="about-dc"  v-for="about in $store.state.about"
                  :key="about.id">
                  <h4 class="ab-me">
                    {{ about.message }}
                  </h4>
                  </h4>
                </div>
              </div>
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
  data() {
    return {
      imgUrlAbout:
      "https://github.com/candice-dk3/vueProjectImages/blob/main/About-Page.png?raw=true",
    };
  },
  methods: {
    getAbout() {
      return this.$store.state.about;
    },
    getData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.imgAbout {
  margin-top: 1154px;
  top: 0%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
}

img {
  margin-top: -40px;
  width: 100%;
  object-fit: cover;
}

.heading-p {
  text-indent: 15%;
  margin-top: 10;
  width: 400px;
  height: auto;
  font-size: 34px;
  margin-bottom: 20px;
}


.body-p {
  text-indent: 15%;
  margin-top: 20px;
  width: 400px;
  height: auto; 
  margin-top: -340px;
}

.about-h1 {
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

.about-dc {
  color: white;
  font-size: 19px;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  top: 150%;
}

#about-dm,
#about-me {
  position: absolute;
  background-color: #fff70044;
  border-radius: 30px;
  margin-top: 60px;
  height: 550px;
  transition: transform 0.4s ease;
  top: 180%;
}


#about-dm:hover{
  transform: scale(1.1);
}

#about-me:hover{
  transform: scale(1.1);
}

.col-5 {
  margin-left: 600px;
}

.ab-m{
  font-size: 36px;
}

.bottom2 {
  position: absolute;
  background: #1a0129;
  margin-top: 1px;
  width: 100%;
  height: 80px;
  top: 304%;
}
</style>
