<script setup>
  import AppButton from "../../components/Button/Button.vue";
</script>

<template>
  <div class="main-introduction">
    <p class="md header">Nice to meet you! I'm <span class="name">Oluwadara Oloye</span></p>
    <p class="xs bio">
      Based in Nigeria, I am a software engineer passionate about building software products that proffer real-life solutions to
      real problems.
    </p>
    <div class="contact-me">
      <AppButton button-text="Contact Me"/>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import './Introduction.scss'
</style>