<script setup>
defineProps({
  buttonText: {
    type: String,
    required: true
  },
  onClick: {
    type: Function,
    default: () => { }
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <button class="btn" @click="onClick" :disabled="disabled">{{ buttonText }}</button>
</template>

<style lang="scss" scoped>
@import './Button.scss';
</style>