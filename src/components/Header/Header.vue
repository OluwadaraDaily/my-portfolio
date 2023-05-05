<script setup>
import GitHub from '../icons/GitHub.vue'
import LinkedIn from '../icons/LinkedIn.vue'
import Twitter from '../icons/Twitter.vue'
import FrontEndMentor from '../icons/FrontEndMentor.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="main-header">
      <div class="portfolio__header__name">
        <RouterLink to="/">
          <p class="portfolio__header__name__title">oluwadara oloye</p>
        </RouterLink>
      </div>
      <div class="portfolio__header__links">
        <a href="https://github.com/OluwadaraDaily" target="__blank">
          <GitHub />
        </a>
        <a href="https://www.frontendmentor.io/profile/OluwadaraDaily" target="__blank">
          <FrontEndMentor />
        </a>
        <a href="https://www.linkedin.com/in/oluwadara-oloye" target="__blank">
          <LinkedIn />
        </a>
        <a href="https://twitter.com/OluwadaraDaily" target="__blank">
          <Twitter />
        </a>
      </div>
    </div>
    <div class="portfolio__header__image">
      <img src="../../assets/images/oluwadara.png" class="portfolio__header__image_img" alt="">
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import './Header.scss';
</style>
