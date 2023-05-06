<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
import Introduction from './views/Introduction/Introduction.vue';
import Technologies from './views/Technologies/Technologies.vue';
</script>

<template>
  <div class="app">
    <Header/>
    <Introduction/>
    <Technologies/>
  </div>
</template>

<style scoped>
</style>
