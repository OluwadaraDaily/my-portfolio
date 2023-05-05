<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
import Introduction from './views/Introduction/Introduction.vue';
</script>

<template>
  <div class="app">
    <Header/>
    <Introduction/>
  </div>
</template>

<style scoped>
</style>
