<template>
  <section id="testimonial">
    <div class="imgTestimonial">
      <img :src="imgUrlTestimonial" alt="" />
      <section class="inner-testimonial-sec">
        <h1 class="h1-testi">Testimonials</h1>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div
              class="carousel-item"
              :class="{ active: index == 0 }"
              v-for="(testimonial, index) in $store.state.testimonials"
              :key="index"
            >
              <div class="outer-card">
                <div class="row">
                  <div class="col-6">
                    <div class="image-bg">
                      <img :src="testimonial.image" alt="" class="a-img" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row">
                      <div class="col">
                        <div class="content">
                          <h2 class="t-name">{{ testimonial.name }}</h2>
                          <h4 class="t-post">{{ testimonial.position }}</h4>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col">
                        <div class="bg-msg">
                          <p class="t-msg">{{ testimonial.message }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  </section>
  <div class="bottom6"></div>
</template>
<script>
export default {
  data() {
    return {
      imgUrlTestimonial:
        "https://github.com/candice-dk3/vueProjectImages/blob/main/Testimonial-Page.png?raw=true",
    };
  },
  methods: {
    getTestimonials() {
      return this.$store.state.testimonials;
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
aside {
  margin-top: -160px;
}
#lim {
  position: static;
}
#zim {
  width: 300px;
}

.imgTestimonial {
  margin-top: 114px;
}

.inner-testimonial-sec {
  margin-top: -70%;
}

.h1-testi {
  color: white;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
}

.t-name,
.t-msg,
.t-post{
  color: white;
}

.bg-msg {
  background-color: rgb(255, 245, 0, 21%);
  width: 700px;
  height: 400px;
  border-radius: 50px;
  margin-left: -60px;
}

.outer-card {
  background-color: rgb(255, 245, 0, 21%);
  width: 1400px;
  height: 600px;
  overflow: hidden;
  align-items: center;
  border-radius: 60px;
  margin-top: 80px;
  margin-left:70px;
  margin-right: 20px;
}

.image-bg {
  background-color: rgb(255, 245, 0, 12%);
  border-radius: 50px;
  width: 400px;
  height: 520px;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.a-img {
  border-radius: 10px;
  width: 340px;
  height: auto;
  margin-top: 82px;
  margin-left: 30px;
}
.description-testi {
  background-color: rgb(255, 245, 0, 12%);
  height: 460px;
  width: 400px;
  margin-top: 250px;
  margin-left: -220px;
  border-radius: 50px;
}

.content {
  margin-top: 50px;
}
.bottom6 {
  position: absolute;
  background: #1a0129;
  width: 100%;
  height: 80px;
  bottom: 50%;
  top: 942%;
}
</style>