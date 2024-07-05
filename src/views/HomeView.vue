<template>
  <div class="container">
    <section class="row" id="home">
      <h2>Hello</h2>
      <HomeComp/>
    </section>
    <section class="row" id="about">
      <AboutComp/>
    </section>
    <section class="row" id="projects">
      <ProjectComp/>
    </section>
    <section class="row" id="skills">
      <SkillComp/>
    </section>
    <section class="row" id="resume">
      <ResumeComp/>
    </section>
    <section class="row" id="testimonial">
      <TestimonialComp/>
    </section>
    <section class="row" id="contact">
      <ContactComp/>
    </section>
  </div>
</template>
<script>
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ProjectComp from '@/components/ProjectComp.vue';
import SkillComp from '@/components/SkillComp.vue';
import ResumeComp from '@/components/ResumeComp.vue';
import TestimonialComp from '@/components/TestimonialComp.vue';
import ContactComp from '@/components/ContactComp.vue';

export default {
  components: {
    HomeComp,
    AboutComp,
    ProjectComp,
    SkillComp,
    ResumeComp,
    TestimonialComp,
    ContactComp
  }

}
</script>
<style>
  
</style>
