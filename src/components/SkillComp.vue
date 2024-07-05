<template>
<section id="skill">
    <div class="imgSkill">
        <img :src="imgUrlSkill" alt=""/>
        <div class="inner-skill-sec">
            <h1 class="skills-h1">Skills</h1>
            <div v-for="skill in $store.state.skills" :key="skill.id" class="skill">
                <div class="skill-card">
                  <div class="imgUrl">
                        <img :src="skill.image" alt="" class="skill-image"/>
                    </div>
                    <div class="skill-card-body">
                        <h5 class="skill-card-title">{{ skill.name }}</h5>
                        <p class="skill-card-p">{{ skill.level }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="bottom4"></div>
</template>

<script>
export default {
    data(){
        return{
            imgUrlSkill: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Skills-Page.png?raw=true',
        }
    },
    methods: {
      getSkills() {
        return this.$store.state.skills;
      },
      getData() {
        return this.$store.dispatch("getData");
      },
    },
    mounted() {
      this.getData();
    },
}
</script>

<style>
.imgSkill{
  margin-top: 110px;
  top: 489%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
}
.inner-skill-sec {
  position: absolute;
  top: 485%;
  width: 100%;
  text-align: center;
}

.imgUrl{
  margin: auto;
  position: relative;
  bottom: 16px;
  left: 40px;
}

.skills-h1 {
  color: white;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 30px;
}

.skill {
  display: inline-block; 
  margin: 40px;
  width: 200px;
  height: 200px;
  border-radius: 30px;
}

.skill-card {
  width: 200px;
  height: 200px;
  background-color: rgb(255, 245, 0, 12%);
  border: 2px solid #FFF500;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-card-body{
  position: relative;
  top: 150%;
  color: white;
  background-color: rgb(255, 245, 0, 12%);
  height: 140px;
  width: 200px;
  border-radius: 20px;
}

.skill-card-title{
  margin-top: 25px;
  color: white;
  margin-bottom: 20px;
  
}
.skill-image{
  position: relative; 
  filter: grayscale(100%);  
  transition: filter 0.4s;
}
.skill-image:hover {
  filter: none;
  filter: none;
}
img.skill-image{
  position: absolute;
  width: 110px;
  height: 125px;
}
.bottom4 {
  position: absolute;
  background: #1A0129;
  width: 100%;
  height: 80px;
  bottom: 50%;
  top: 622%
}
</style>