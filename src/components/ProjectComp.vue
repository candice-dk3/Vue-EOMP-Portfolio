<template>
    <section id="Project">
        <div class="imgProject">
            <img :src="imgUrlProject" alt=""/>
            <h1 class="project-h1">Projects</h1>
            <div class="projects-inner-container">
                <div class="d-flex">
                    <div class="card m-2 col" >
                        <div class="imgUrlCalculator">
                            <img :src="imgUrlCalculator" alt="Calculator"/>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title1">Calculator</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-body">
                            <a href="https://github.com/candice-dk3/Calculator" target="blank" class="card-link"><img :src="GitHub1" alt="" class="GitHub1"/></a>
                            <a href="https://calculator-zeta-vert-97.vercel.app/" target="blank" class="card-link"><img :src="Vercel1" alt="" class="Vercel1"/></a>
                        </div>
                    </div>

                    <div class="card m-2 col">         
                        <div class="imgUrlKeyboard">
                            <img :src="imgUrlKeyboard" alt="Keyboard"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title2">Keyboard</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-body">
                            <a href="https://github.com/candice-dk3/Keyboard" target="blank" class="card-link"><img :src="GitHub2" alt="" class="GitHub2"/></a>
                            <a href="https://key-board-rho.vercel.app/" target="blank" class="card-link"><img :src="Vercel2" alt="" class="Vercel2"/></a>
                        </div>
                    </div>

                    <div class="card m-2 col">         
                        <div class="imgUrlBMICalc">
                            <img :src="imgUrlBMICalc" alt="BMI Calculator"/>
                        </div>
                        <div class="card-body">
                           <h5 class="card-title3">BMI Calculator</h5>
                           <p class="card-text"></p>
                        </div>
                         <div class="card-body">   
                            <a href="https://github.com/candice-dk3/BMI-Calculator" target="blank" class="card-link"><img :src="GitHub3" alt="" class="GitHub3"/></a>
                            <a href="https://bmi-calculator-lake-delta.vercel.app/" target="blank" class="card-link"><img :src="Vercel3" alt="" class="Vercel3"/></a>
                        </div>
                        </div>
                </div> 
                <div class="d-flex">    
                    <div class="row">
                        <div class="card m-2 col" >
                        <div class="imgUrlTempCalc">
                            <img :src="imgUrlTempCalc" alt="Temperature Calculator"/>
                        </div>
                        <div class="card-body">
                           <h5 class="card-title4">Temperature Calculator</h5>
                           <p class="card-text"></p>
                        </div>
                         <div class="card-body">          
                            <a href="https://github.com/candice-dk3/Temp-Convertor" target="blank" class="card-link"><img :src="GitHub4" alt="" class="GitHub4"/></a>
                            <a href="https://temp-convertor-tau.vercel.app/" target="blank" class="card-link"><img :src="Vercel4" alt="" class="Vercel4"/></a>
                        </div>
                    </div>

                    <div class="card m-2 col">         
                        <div class="imgUrlJS">
                            <img :src="imgUrlJS" alt="Scent Sensation Image"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title5">Scent Sensation - JS EOMP</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-body">
                            <a href="https://github.com/candice-dk3/JS-EOMP" target="blank" class="card-link"><img :src="GitHub5" alt="" class="GitHub5"/></a>
                            <a href="https://js-eomp-kappa.vercel.app/" target="blank" class="card-link"><img :src="Vercel5" alt="" class="Vercel5"/></a>
                        </div>
                    </div>

                    <div class="card m-2 col">         
                        <div class="imgUrlSwegga">
                            <img :src="imgUrlSwegga" alt="Swegga Image"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title6">Swegga</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-body">
                            <a href="https://github.com/candice-dk3/Swegga" target="blank" class="card-link"><img :src="GitHub6" alt="" class="GitHub6"/></a>
                            <a href="https://swegga-project-two.vercel.app/" target="blank" class="card-link"><img :src="Vercel6" alt="" class="Vercel6"/></a>
                        </div>
                        </div>
                    </div>
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
            imgUrlProject: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Project-Page.png?raw=true',
            imgUrlCalculator: 'https://github.com/candice-dk3/vueProjectImages/blob/main/calculator.png?raw=true',
            imgUrlKeyboard: 'https://github.com/candice-dk3/vueProjectImages/blob/main/keyboard.png?raw=true',
            imgUrlBMICalc: 'https://github.com/candice-dk3/vueProjectImages/blob/main/bmi-cal.png?raw=true',
            imgUrlTempCalc: 'https://github.com/candice-dk3/vueProjectImages/blob/main/temp-convertor.png?raw=true',
            imgUrlJS: 'https://github.com/candice-dk3/vueProjectImages/blob/main/js-eomp.png?raw=true',
            imgUrlSwegga: 'https://github.com/candice-dk3/vueProjectImages/blob/main/swegga.png?raw=true',
            GitHub1: 'https://github.com/candice-dk3/vueProjectImages/blob/main/github.png?raw=true',
            Vercel1: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Vector.png?raw=true',
            GitHub2: 'https://github.com/candice-dk3/vueProjectImages/blob/main/github.png?raw=true',
            Vercel2: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Vector.png?raw=true',
            GitHub3: 'https://github.com/candice-dk3/vueProjectImages/blob/main/github.png?raw=true',
            Vercel3: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Vector.png?raw=true',
            GitHub4: 'https://github.com/candice-dk3/vueProjectImages/blob/main/github.png?raw=true',
            Vercel4: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Vector.png?raw=true',
            GitHub5: 'https://github.com/candice-dk3/vueProjectImages/blob/main/github.png?raw=true',
            Vercel5: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Vector.png?raw=true',
            GitHub6: 'https://github.com/candice-dk3/vueProjectImages/blob/main/github.png?raw=true',
            Vercel6: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Vector.png?raw=true'
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

.projects-inner-container{
    position: absolute;
    top: 325%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    left: 5%;
}

.card{
    background-color: #fff7003c;
    border: 5px solid #fff70061;
    border-radius: 15%;
    height: 300px;
    width: 450px;
    transition: transform 0.5s ease;
}
.card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.imgUrlCalculator, .imgUrlBMICalc{
    height: 200px;
    width: 190px;
    position: absolute;
    bottom: 140px;
    top: 90px;
    left: 30px;
}

.card-title1, .card-title3{
    position: absolute;
    left: 55%;
    top: 26%;
    color: white;
    font-size: 24px;
}
.imgUrlTempCalc{
    width: 200px;
    position: absolute;
    bottom: 140px;
    top: 90px;
    left: 25px;
}
.card-title4{
    color: white;
    font-size: 24px;
    position: absolute;
    left: 55%;
    bottom: 60%;
}
.GitHub1, .GitHub3, .GitHub4{
    width: 60px;
    height: 40px;
    position: absolute;
    left: 239px;
    top: 75%;
}

.Vercel1, .Vercel3, .Vercel4{
    width: 42px;
    height: 40px;
    position: absolute;
    left: 335px;
    top: 75%;
}

.imgUrlKeyboard, .imgUrlJS, .imgUrlSwegga{
    height: 250px;
    width: 350px;
    position: absolute;
    top: 25%;
    left: 10%;
}
.GitHub2, .GitHub6{
    position: absolute;
    width: 60px;
    height: 40px;
    left: 250px;
    bottom: 10%;
}

.Vercel2, .Vercel6{
    width: 42px;
    height: 40px;
    position: absolute;
    left: 350px;
    bottom: 10%;
}
.card-title2, .card-title6{
    color: white;
    font-size: 24px;
    position: absolute;
    bottom: 8%;
    left: 20%;
}
.card-title5{
    color: white;
    font-size: 24px;
    position: absolute;
    bottom: 8%;
    left: 3%;
}
.GitHub5{
    position: absolute;
    width: 60px;
    height: 40px;
    left: 290px;
    bottom: 10%;
}
.Vercel5{
    width: 42px;
    height: 40px;
    position: absolute;
    left: 370px;
    bottom: 10%;
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