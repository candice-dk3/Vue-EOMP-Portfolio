<template>
    <section>
        <div class="imgTestimonial">
            <img :src="imgUrlTestimonial" alt=""/>
        </div>
    </section>
<div class="bottom6"></div>
</template>
<script>
export default {
    data(){
        return{
            imgUrlTestimonial: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Testimonial-Page.png?raw=true'
            }
    }
}
</script>
<style>
   .bottom6 {
    position: absolute;
    background: #1A0129;
    width: 100%;
    height: 80px;
    bottom: 50%;
    top: 865%
}   
</style>