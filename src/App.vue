<template>
  <NavbarComp/>
  <div v-if="isLoading" class="spinner-container">
    <Spinner :isLoading="isLoading"></Spinner>
  </div>
  <home-comp/>
  <about-comp/>
  <project-comp/>
  <skill-comp/>
  <resume-comp/>
  <testimonial-comp/>
  <contact-comp/>
  <spinner-comp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';
import HomeComp from './components/HomeComp.vue'
import AboutComp from './components/AboutComp.vue';
import ProjectComp from './components/ProjectComp.vue';
import SkillComp from './components/SkillComp.vue';
import ResumeComp from './components/ResumeComp.vue';
import TestimonialComp from './components/TestimonialComp.vue';
import ContactComp from './components/ContactComp.vue';

export default{
  components:{
    NavbarComp,
    SpinnerComp,
    HomeComp,
    AboutComp,
    ProjectComp,
    SkillComp,
    ResumeComp,
    TestimonialComp,
    ContactComp,
    FooterComp
    },
    data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
#app {
  font-family: "Inknut Antiqua", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

section{
  scroll-margin-block: 4rem;
}

.spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 132, 228);
  z-index: 1000;
}
</style>
