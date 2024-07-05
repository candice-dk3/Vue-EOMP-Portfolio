<template>
  <section id="project">
    <div class="imgProject">
      <img :src="imgUrlProject" alt="" />
      <div class="project-grid">
        <h1 class="project-h1">Projects</h1>
        <div class="container-project">
          <div class="row gap-2">
            <div class="project-cards">
              <Card v-for="project in $store.state.projects" :key="project.id" class="project-card">
                <template #cardHeader>
                  <div class="d-flex">
                    <img :src="project.image" :alt="project.name" loading="lazy" class="img-fluid">
                    <h4 class="project-name">{{project.name}}</h4>
                  </div>
                </template>
                <template #cardBody>
                  <a :href="project.github" target="_blank" class="GitHub">
                    <img :src="imgUrlGithub" alt="" />
                  </a>
                  <a :href="project.vercel" target="_blank" class="Vercel">
                    <img :src="imgUrlVercel" alt="" />
                  </a>
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="bottom3"></div>
</template>
  
<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      imgUrlProject:'https://github.com/candice-dk3/vueProjectImages/blob/main/Project-Page.png?raw=true',
      imgUrlGithub: 'https://github.com/candice-dk3/vueProjectImages/blob/main/github.png?raw=true',
      imgUrlVercel: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Vector.png?raw=true'
    };
  },
  methods: {
    getProjects() {
      return this.$store.state.projects;
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
  
<style>
.imgProject {
  margin-top: 112px;
  top: 110%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
}

.container-project {
  position: absolute;
  top: 340%;
  width: 100%;
  flex-basis: 30%;
}

.row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-cards {
  flex-basis: 30%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.project-card {
  margin: 40px;
  color: transparent;
  height: 260px;
  width: 400px;
  transition: transform 0.4s ease;
}

.project-card:hover {
  transform: scale(1.1);
}

.img-fluid {
  height: 200px;
  width: 190px;
  position: absolute;
  bottom: 140px;
  top: 90px;
  left: 30px;
}

.project-card-title {
  position: absolute;
  left: 55%;
  top: 26%;
  color: white;
  font-size: 24px;
}

.project-name{
  margin-left: 220px;
  margin-top: 100px;
}
.GitHub {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 239px;
  top: 75%;
}
.Vercel {
  width: 26px;
  height: 25px;
  position: absolute;
  left: 290px;
  top: 75%;
}
.project-h1 {
  color: white;
  position: absolute;
  top: 325%;
  right: 50%;
}
.bottom3 {
  position: absolute;
  background: #1a0129;
  width: 100%;
  height: 80px;
  bottom: 50%;
  top: 464%;
}
</style>