<script setup>
import GitHub from '../../components/icons/GitHub.vue'
import LinkedIn from '../../components/icons/LinkedIn.vue'
import Twitter from '../../components/icons/Twitter.vue'
import FrontEndMentor from '../../components/icons/FrontEndMentor.vue'
</script>
<template>
  <div class="main-footer">
    <div class="inner-footer">
      <p class="footer-name">oluwadara oloye</p>
      <div class="footer-links">
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
  </div>
</template>

<style lang="scss" scoped>
@import './Footer.scss'
</style>