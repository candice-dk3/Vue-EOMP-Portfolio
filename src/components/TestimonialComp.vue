<template>
  <section id="Testimonial">
      <div class="imgTestimonial">
          <img :src="imgUrlTestimonial" alt=""/>
          <section class="inner-testimonial-sec">
              <h1 class="h1-testi">Testimonials</h1>
              <div class="testi-cards">
                  <div class="d-flex">
                      <div class="testi-card1">
                          <div class="row">
                              <div class="testimonial1">
                                  <div class="img-div">
                                      <img :src="imgPerson1" alt="First Person"/>
                                  </div>
                                  <div class="testi-text">
                                      <h3>Person 1</h3>
                                      <h5>Who They are</h5>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <h5>Their message</h5>
                          </div>
                      </div>
                      <div class="testi-card2">
                          <div class="row">
                              <div class="testimonial1">
                                  <div class="img-div">
                                      <img :src="imgPerson1" alt="First Person"/>
                                  </div>
                                  <div class="testi-text">
                                      <h3>Person 1</h3>
                                      <h5>Who They are</h5>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <h5>Their message</h5>
                          </div>
                      </div>
                      <div class="testi-card3">
                          <div class="row">
                              <div class="testimonial1">
                                  <div class="img-div">
                                      <img :src="imgPerson1" alt="First Person"/>
                                  </div>
                                  <div class="testi-text">
                                      <h3>Person 1</h3>
                                      <h5>Who They are</h5>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <h5>Their message</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  </section>
<div class="bottom6"></div>
</template>
<script>
export default {
    data(){
        return{
            imgUrlTestimonial: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Testimonial-Page.png?raw=true',
            imgPerson1:'https://github.com/candice-dk3/vueProjectImages/blob/main/CK.png?raw=true'
            }
    }
}
</script>
<style>
.inner-testimonial-sec{
    position: absolute;
    top: 730%
}

.h1-testi{
    color: white;
    text-align: center;
}

.testi-cards{
    display: grid;
    grid-template-rows: (1, 2fr);
    position: absolute;
    top: 300%;
    left: 20%;
}

.testi-card1{
    width: 500px;
}
.bottom6 {
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 865%
}   
</style>