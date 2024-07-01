<template>
    <section>
        <div class="imgProject">
            <img :src="imgUrlProject" alt=""/>
            <h1 class="project-h1">Projects</h1>
            <div class="projects-inner-container">
                            <div class="d-flex">
                                <div class="card m-2 col" >
                                    <div>
                                        <img :src="imgUrlCalculator" alt=""/>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Calculator</h5>
                                        <p class="card-text"></p>
                                    </div>
                                    <div class="card-body">
                                        <a href="https://calculator-zeta-vert-97.vercel.app/" target="blank" class="card-link"><img :src="GitHub1" alt=""/></a>
                                    </div>
                                </div>

                                <div class="card m-2 col">         
                                    <div>
                                        <img :src="imgUrlKeyboard" alt=""/>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Keyboard</h5>
                                        <p class="card-text"></p>
                                    </div>
                                    <div class="card-body">
                                        <a href="" target="blank" class="card-link"><img :src="GitHub2" alt=""/></a>
                                    </div>
                                </div>

                                <div class="card m-2 col">         
                                    <div>
                                        <img :src="imgUrlBMICalc" alt=""/>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">BMI Calculator</h5>
                                        <p class="card-text"></p>
                                    </div>
                                    <div class="card-body">
                                        
                                        <a href="" target="blank" class="card-link"><img :src="GitHub3" alt=""/></a>
                                    </div>
                                </div>
                            </div> 

                            <div class="row">
                                <div class="col"></div>
                                <div class="card m-2 col" >
                                    <div>
                                        <img :src="imgUrlTempCalc" alt=""/>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Temperature Calculator</h5>
                                        <p class="card-text"></p>
                                    </div>
                                    <div class="card-body">
                                        
                                        <a href="" target="blank" class="card-link"><img :src="GitHub4" alt=""/></a>
                                    </div>
                                </div>

                                <div class="card m-2 col">         
                                    <div>
                                        <img :src="imgUrlJS" alt=""/>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Scent Sensation - JS EOMP</h5>
                                        <p class="card-text"></p>
                                    </div>
                                    <div class="card-body">
                                        
                                        <a href="" target="blank" class="card-link"><img :src="GitHub5" alt=""/></a>
                                    </div>
                                </div>

                                <div class="card m-2 col">         
                                    <div>
                                        <img :src="imgUrlSwegga" alt=""/>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Swegga</h5>
                                        <p class="card-text"></p>
                                    </div>
                                    <div class="card-body">
                                        <a href="" target="blank" class="card-link"><img :src="GitHub6" alt=""/></a>
                                        
                                    </div>
                                </div>
                                <div class="col"></div>
                            </div>
                        </div> 
        </div>
    </section>
    <div class="bottom3"></div>
</template>
<script>
export default {
    data(){
        return{
            imgUrlProject: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Project-Page.png?raw=true'
        }
    }
}
</script>
<style>
.imgProject {
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
}
  
img{
    margin-top: -40px;
    width: 100%;
    object-fit: cover;
}

.project-h1{
    position: absolute;
    color:white;
    top: 310%;
    right: 50%;
}
.bottom3{
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 430%
}
</style>