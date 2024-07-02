import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeComp from '@/components/HomeComp.vue'
import AboutComp from '@/components/AboutComp.vue'
import ProjectComp from '@/components/ProjectComp.vue'
import SkillComp from '@/components/SkillComp.vue'
import ResumeComp from '@/components/ResumeComp.vue'
import TestimonialComp from '@/components/TestimonialComp.vue'
import ContactComp from '@/components/ContactComp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'home',
    component: HomeComp
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComp
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectComp
  },
  {
    path: '/skill',
    name: 'skill',
    component: SkillComp
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeComp
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: TestimonialComp
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
