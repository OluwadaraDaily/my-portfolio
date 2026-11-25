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
  href: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <a v-if="href" class="btn" :href="href">{{ buttonText }}</a>
  <button v-else class="btn" @click="onClick" :disabled="disabled">{{ buttonText }}</button>
</template>

<style lang="scss" scoped src="./Button.scss"></style>
