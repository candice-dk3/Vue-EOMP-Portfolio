<template>
    <section>
        <div class="imgResume">
            <img :src="imgUrlResume" alt=""/>
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

.bottom5 {
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 712%
}    
</style>