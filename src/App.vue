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
    <Introduction :scrollTo="scrollTo"/>
    <Technologies/>
    <Projects :scrollTo="scrollTo"/>
    <Contact ref="contact-section"/>
    <Footer/>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(refName) {
      const element = this.$refs[refName]
      console.log('Element ->', element)
      const top = element.$el.offsetTop
      console.log('Top ->', top)
      window.scrollTo(0, top)
    }
  }
}
</script>

<style scoped>
</style>
