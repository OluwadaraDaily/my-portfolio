<script setup>
import Header from '../components/Header/Header.vue';
import Technologies from './Technologies/Technologies.vue';
import Introduction from './Introduction/Introduction.vue';
import Projects from './Projects/Projects.vue';
import Contact from './Contact/Contact.vue';
import Footer from './Footer/Footer.vue';
</script>

<template>
  <div class="app">
    <Header/>
    <Introduction :scrollTo="scrollTo"/>
    <!-- <Technologies/> -->
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
      const top = element.$el.offsetTop
      window.scrollTo(0, top)
    }
  }
}
</script>

<style scoped>
</style>
