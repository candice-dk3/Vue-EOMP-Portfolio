<template>
    <section id="resume">
        <div class="imgResume">
            <img :src="imgUrlResume" alt="" />
            <section class="resume-inner-sec">
                <h1 class="h1-resume">Resume</h1>
                <div v-for="Education in $store.state.education" :key="Education.id" class="education">
                    <div class="row">
                        <div class="col-6">
                            <div class="education-text">
                                <h4 class="edu-year">{{ Education.year }}</h4>
                                <h2>{{ Education.placeOfInstitution }}</h2>
                                <p>{{ Education.description }}</p>
                            </div>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-6"></div>
                    </div>
                </div>
            </section>
        </div>
    </section>
<div class="bottom5"></div>
</template>

<script>
    export default {
        data(){
            return{
                imgUrlResume: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Resume-Page.png?raw=true'
            }
        },
        methods: {
      getResume() {
        return this.$store.state.resume;
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

<style >
.imgResume{
    margin-top: 110px;
    object-fit: cover;
    top: 120%;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
}

.resume-inner-sec{
    position: absolute;
    top: 640%;
    width: 100%;
}

.h1-resume{
    color: white;
    text-align: center;
    margin-bottom: 60px;
}

.education-text{
    background-color: rgb(255, 245, 0, 22%);
    color: white;
    border-radius: 40px;
    width: 800px;
    height: 250px;
    margin-top: 40px;
    margin-bottom: 60px;
    text-align: center;
}

.edu-year{
    margin-top: 40px;
    margin-bottom: 30px;
}

.bottom5 {
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 782%
}    
</style>