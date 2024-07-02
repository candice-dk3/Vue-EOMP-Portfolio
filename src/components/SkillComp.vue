<template>
<section>
    <div class="imgSkill">
        <img :src="imgUrlSkill" alt=""/>
    </div>
</section>
<div class="bottom4"></div>
</template>
<script>
export default {
    data(){
        return{
            imgUrlSkill: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Skills-Page.png?raw=true'
        }
    }
}
</script>
<style>


.bottom4{
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 568%
}
</style>