<template>
    <section id="Resume">
        <div class="imgResume">
            <img :src="imgUrlResume" alt=""/>
            <section class="resume-inner-sec">
                <h1 class="h1-resume">Resume</h1>
                <div id="education-text">
                    <div class="row" id="education-sec">
                    <div class="col-1">
                    </div>
                    <div class="col-6" id="education-d-sec">
                        <p></p>
                      <h2 class="education-h2">Education</h2>
                      <p class="date-p">April 2024 - present</p>
                      <p class="place-p">Life Choices Academy</p>
                      <p class="edu-text">Currently I'm learning how to become a full-stack developer through the Life Choices Academy. I have learned so much and am so excited to learn more</p>
                      <p></p>
                    </div>
                    <div class="col-5">  
                    </div>
                   </div>
               </div>
               <br>
               <br>
               <div id="school-row">
                <div class="row" id="school-sec">
                <div class="col-5"></div>
                <div class="col-6" id="school-d-sec">
                  <p class="date-p">2019 - 2023</p>
                  <p class="place-p">Garlandale High School</p>
                  <p class="school-text">I matriculated with a bachelor's pass. High school was tough but I wouldn't have made to the Life Choices Academy if I didn't attend it. I am grateful to have attended school and make this in far life.</p>
                </div>
                <div class="col-1"></div>
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
        }
    }
    </script>
<style >
.resume-inner-sec{
    position: absolute;
    top: 590%;
    width: 100%;
}

.h1-resume{
    color: white;
}

.education-h2{
    color: white;
}
.date-p{
    color: white;
}
.place-p{
    color: white;
}
.edu-text{
    color: white;
}
.school-text{
    color: white;
}

#education-text{
    position: absolute;
    right: 20%;
    border: 2px solid #1A0129;
}
/* #school-text{
    position: absolute;
    right: 20%;
    bottom: 20%;
} */
.bottom5 {
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 712%
}    
</style>