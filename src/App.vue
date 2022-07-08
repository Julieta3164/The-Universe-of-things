<script>
import Carrusel from '@/components/header/Carrusel.vue'
import Nav from '@/components/header/Nav.vue'
import Footer from '@/components/Footer.vue'
    export default {
        name:'app',
        components:{
            Carrusel,
            Nav,
            Footer
        }
        
    }
</script>

<template>
   <div id="app">
    <Carrusel />
    <Nav/>
    <Footer/>
</div>

</template>


<style>
@import '@/assets/base.css';
</style>

