<template>
<section id="Skill">
    <div class="imgSkill">
        <img :src="imgUrlSkill" alt=""/>
        <div class="inner-skill-sec">
            <h1 class="skill-h1">Skill</h1>
            <div class="row">
                <div class="col-4">
                    <div class="html">
                        <img :src="imgUrlSkillHtml" alt="HTML"/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="css">
                        <img :src="imgUrlSkillCss" alt="CSS"/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="bootstrap">
                        <img :src="imgUrlSkillBootstrap" alt="Bootstrap"/> 
                    </div>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="h3-text">
                        <h3></h3>
                        <h3></h3>
                    </div>
                </div>
                <div class="col-4">
                    <div class="h3-text">
                        <h3></h3>
                        <h3></h3>
                    </div>
                </div>
                <div class="col-4">
                    <div class="h3-text">
                        <h3></h3>
                        <h3></h3>
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
            imgUrlSkillHtml: 'https://github.com/candice-dk3/vueProjectImages/blob/main/html.png?raw=true',
            imgUrlSkillCss: 'https://github.com/candice-dk3/vueProjectImages/blob/main/css.png?raw=true',
            imgUrlSkillBootstrap: 'https://github.com/candice-dk3/vueProjectImages/blob/main/bootstrap.png?raw=true',

        }
    }
}
</script>

<style>
.inner-skill-sec{
    position: absolute;
    top: 449%;
    width: 100%;
}

.skill-h1{
    color: white;
    margin-left: 650px;
}


.html{
    width: 150px;
    height: 100px;
    position: absolute;
    top: 315%;
    left: 10%;
    background-color: #3c025d;
    border-radius: 50px;
}

.css{
    width: 190px;
    height: 100px;
    position: absolute;
    top: 300%;
}

.bootstrap{
    width: 200px;
    height: 100px;
    position: absolute;
    top: 310%;
}
.bottom4{
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 568%
}
</style>