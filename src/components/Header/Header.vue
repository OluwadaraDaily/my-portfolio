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
    <div v-if="$route.name === 'home'" class="portfolio__header__image">
      <img
        src="/images/portrait/oluwadara-562.webp"
        srcset="
          /images/portrait/oluwadara-352.webp 352w,
          /images/portrait/oluwadara-445.webp 445w,
          /images/portrait/oluwadara-562.webp 562w
        "
        sizes="(max-width: 659px) 174px, (max-width: 1024px) 352px, 445px"
        width="562"
        height="444"
        fetchpriority="high"
        class="portfolio__header__image_img"
        alt="Portrait of Oluwadara Oloye"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped src="./Header.scss"></style>
