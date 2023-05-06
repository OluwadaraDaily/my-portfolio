<script setup>
import ProjectItem from '../../components/ProjectItem/ProjectItem.vue';
import AppButton from '../../components/Button/Button.vue';
import { projects } from '../../data/constants';
</script>

<template>
  <div class="main-projects">
    <div class="top-section">
      <p class="title">Projects</p>
      <AppButton button-text="Contact Me" />
    </div>
    <div class="main-projects__projects">
      <ProjectItem
        v-for="(item, index) in projects"
        :key="index"
        :image="item.image"
        :image-alt-text="`Website Image of ${item.name}`"
        :title="item.name"
        :tech-stack="item.techStack"
        :project-link="item.projectLink"
        :project-repo="item.projectRepo"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './Projects.scss'
</style>