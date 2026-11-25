<script setup>
import { socialLinks } from '../../data/socialLinks'
</script>
<template>
  <div class="main-footer">
    <div class="inner-footer">
      <p class="footer-name">oluwadara oloye</p>
      <div class="footer-links">
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
  </div>
</template>

<style lang="scss" scoped src="./Footer.scss"></style>
