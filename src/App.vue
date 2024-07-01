<template>
  <NavbarComp/>
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
// /*eslint-disable*/
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
    }
}
</script>

<style>

#app {
  font-family: "Inknut Antiqua", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
