<script setup>
import AppButton from '../../components/Button/Button.vue';
import { projects } from '../../data/constants';

defineProps({
  scrollTo: {
    type: Function,
    required: true
  }
});

const sorted = [...projects].sort((a, b) => b.year - a.year);

// Every row gets all three slots so the icons line up even when a link is missing.
const links = (p) => [
  { href: p.projectLink, label: 'live site', d: 'M7 17 17 7M8 7h9v9' },
  { href: p.projectRepo, label: 'code', d: 'm8 6-6 6 6 6m8-12 6 6-6 6' },
  { href: p.demoVideo, label: 'demo video', d: 'M7 4v16l13-8z' }
];
</script>

<template>
  <div class="main-projects">
    <div class="top-section">
      <p class="title">Projects</p>
      <AppButton button-text="Contact Me" @click="scrollTo('contact-section')"/>
    </div>
    <ul class="project-list">
      <li v-for="item in sorted" :key="item.name" class="project-row">
        <RouterLink :to="`/projects/${item.slug}`" class="row-link">
          <span class="year">{{ item.year }}</span>
          <span class="name">{{ item.name }}</span>
          <span class="pitch">{{ item.pitch }}</span>
          <span class="stack">{{ item.techStack.join(' · ') }}</span>
        </RouterLink>
        <div class="icons">
          <template v-for="link in links(item)" :key="link.label">
            <a
              v-if="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="icon"
              :aria-label="`Open the ${item.name} ${link.label}`"
              :title="`Open the ${item.name} ${link.label}`"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="link.d" /></svg>
            </a>
            <span v-else class="icon"></span>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped src="./Projects.scss"></style>
