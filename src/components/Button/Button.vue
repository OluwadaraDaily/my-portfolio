<script setup>
defineProps({
  buttonText: {
    type: String,
    required: true
  },
  onClick: {
    type: Function,
    default: () => { }
  }
});
</script>

<template>
  <button class="btn" @click="onClick">{{ buttonText }}</button>
</template>

<style lang="scss" scoped>
@import './Button.scss';
</style>