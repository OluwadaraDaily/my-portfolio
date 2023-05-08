<script setup>
import { ref } from 'vue';
defineProps({
  type: String,
  placeholder: String,
  vModel: [String, Object, Array]
});

const emit = defineEmits(['updateInput'])

const text = ref("");

const handleOnChange = (e) => {
  text.value = e.target.value
  emit('updateInput', text.value)
};
</script>

<template>
  <div>
    <textarea cols="10" rows="10" class="input" v-if="type === 'textarea'" :placeholder="placeholder" :value="text" @input="handleOnChange"></textarea>
    <input :type="type ? type : 'text'" class="input" :placeholder="placeholder" :value="text" @input="handleOnChange" v-else>
  </div>
</template>

<style lang="scss" scoped>
@import './Input.scss';
</style>