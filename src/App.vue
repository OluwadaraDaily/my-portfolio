<script setup>
import Header from './components/Header/Header.vue'
import Footer from './views/Footer/Footer.vue'
</script>

<template>
  <div class="app">
    <Header />
    <!-- Key on path, not fullPath, so jumping to #contact doesn't remount the page. -->
    <RouterView :key="$route.path" />
    <Footer />
  </div>
</template>
