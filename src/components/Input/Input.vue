<script setup>
defineProps({
  type: String,
  placeholder: String
});
</script>

<template>
  <div>
    <textarea cols="10" rows="10" class="input" v-if="type === 'textarea'" :placeholder="placeholder"></textarea>
    <input :type="type ? type : 'text'" class="input" :placeholder="placeholder" v-else>
  </div>
</template>

<style lang="scss" scoped>
@import './Input.scss'
</style>