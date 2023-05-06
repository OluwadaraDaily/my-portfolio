<script setup>
import TechnologyItem from '../../components/TechnologyItem/TechnologyItem.vue';
import { technologies } from '../../data/constants';
</script>

<template>
  <div class="main-technologies">
    <TechnologyItem
      v-for="(technology, index) in technologies"
      :key="index"
      :title="technology.name"
      :years-of-experience="technology.yearsOfExperience"
    />
  </div>
</template>

<style lang="scss" scoped>
@import './Technologies.scss'
</style>