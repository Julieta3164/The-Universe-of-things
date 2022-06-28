<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="carousel of disney images" class="header" src="@/assets/img/header1.png"/>
</header>
  <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  <RouterView />

  <footer>
    <img src="@/assets/img/copy.png" alt="">
    Disney
  </footer>
</template>


<style>
@import '@/assets/base.css';
</style>
