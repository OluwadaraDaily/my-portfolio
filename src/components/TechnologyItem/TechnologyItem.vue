<template>
  <div class="main-tech-item">
    <p class="title">{{ title }}</p>
    <p class="years-of-experience">{{ yearsOfExperience }}+ Years Experience</p>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    yearsOfExperience: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
@import './TechnologyItem.scss'
</style>