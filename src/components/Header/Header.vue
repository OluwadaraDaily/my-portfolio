<script setup>
import GitHub from '../icons/GitHub.vue'
import LinkedIn from '../icons/LinkedIn.vue'
import Twitter from '../icons/Twitter.vue'
import FrontEndMentor from '../icons/FrontEndMentor.vue'
</script>

<template>
  <header>
    <div class="portfolio__header__name">
      <p class="portfolio__header__name__title">oluwadara oloye</p>
    </div>
    <div class="portfolio__header__links-and-image">
      <div class="portfolio__header__links">
        <a href="https://github.com/OluwadaraDaily" target="__blank">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/oluwadara-oloye" target="__blank">
          <LinkedIn />
        </a>
        <a href="https://twitter.com/OluwadaraDaily" target="__blank">
          <Twitter />
        </a>
        <a href="https://www.frontendmentor.io/profile/OluwadaraDaily" target="__blank">
          <FrontEndMentor />
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import './Header.scss';
</style>
