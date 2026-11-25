<script setup>
import ProjectItem from '../../components/ProjectItem/ProjectItem.vue';
import AppButton from '../../components/Button/Button.vue';
import { projects } from '../../data/constants';

defineProps({
  scrollTo: {
    type: Function,
    required: true
  }
});

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
</script>

<template>
  <div class="main-projects">
    <div class="top-section">
      <p class="title">Projects</p>
      <AppButton button-text="Contact Me" @click="scrollTo('contact-section')"/>
    </div>
    <div class="main-projects__projects">
      <ProjectItem
        v-for="item in featured"
        :key="item.name"
        :image="item.image"
        :image-alt-text="`Website Image of ${item.name}`"
        :title="item.name"
        :year="item.year"
        :pitch="item.pitch"
        :tech-stack="item.techStack"
        :project-link="item.projectLink"
        :project-repo="item.projectRepo"
        :demo-video="item.demoVideo"
        :slug="item.slug"
      />
    </div>
    <ul class="project-list">
      <li v-for="item in others" :key="item.name" class="project-row">
        <RouterLink :to="`/projects/${item.slug}`" class="row-link">
          <span class="year">{{ item.year }}</span>
          <span class="name">{{ item.name }}</span>
          <span class="pitch">{{ item.pitch }}</span>
          <span class="stack">{{ item.techStack.join(' · ') }}</span>
        </RouterLink>
        <a
          v-if="item.demoVideo"
          :href="item.demoVideo"
          target="_blank"
          rel="noopener"
          class="video"
          :aria-label="`Watch the ${item.name} demo video`"
          :title="`Watch the ${item.name} demo video`"
        >▶</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped src="./Projects.scss"></style>
