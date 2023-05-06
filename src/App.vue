<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
import Introduction from './views/Introduction/Introduction.vue';
import Technologies from './views/Technologies/Technologies.vue';
import Projects from './views/Projects/Projects.vue';
import Contact from './views/Contact/Contact.vue';
import Footer from './views/Footer/Footer.vue';
</script>

<template>
  <div class="app">
    <Header/>
    <Introduction/>
    <Technologies/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
</template>

<style scoped>
</style>
