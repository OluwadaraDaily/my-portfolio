<script setup>
  import Button from '../Button/Button.vue';
  const props = defineProps({
    image: String,
    imageAltText: String,
    title: String,
    techStack: Array,
    projectLink: String,
    projectRepo: String
  });

const openProject = () => {
  if (!!props.projectLink) {
    window.open(props.projectLink, "_blank")
  }
};
const openRepo = () => {
  if (!!props.projectRepo) {
    window.open(props.projectRepo, "_blank")
  }
};
</script>

<template>
  <div class="main-project-item">
    <img :src="`./images/${image}`" class="project-img" :alt="imageAltText">
    <p class="title">{{ title }}</p>
    <ul class="tech-stack-list">
      <li class="tech-stack-list-item"
        v-for="(item, index) in techStack"
        :key="index"
      >{{ item }}</li>
    </ul>
    <div class="project-links">
      <Button button-text="View Project" :on-click="openProject" />
      <Button button-text="View Code" :on-click="openRepo"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './ProjectItem.scss'
</style>