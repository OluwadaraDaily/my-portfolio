<script setup>
import { socialLinks } from '../../data/socialLinks'
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
        <a
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          :aria-label="link.label"
          target="_blank"
          rel="noopener"
        >
          <component :is="link.icon" />
        </a>
      </div>
    </div>
    <div class="portfolio__header__image">
      <img
        src="../../assets/images/oluwadara.png"
        class="portfolio__header__image_img"
        alt="Portrait of Oluwadara Oloye"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped src="./Header.scss"></style>
