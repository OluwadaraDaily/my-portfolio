<script setup>
import AppInput from '../../components/Input/Input.vue';
import Button from '../../components/Button/Button.vue';
const handleSubmit = () => {
  console.log('Submit...')
}
</script>

<template>
  <div class="main-contact">
    <div class="contact-text">
      <p class="title">Contact</p>
      <p class="sub-title">
        I would love to hear about your project and how I could help.
        Please fill in the form, and I’ll get back to you as soon as possible.
      </p>
    </div>
    <form class="form" autocomplete="off" @submit.prevent="handleSubmit">
      <AppInput placeholder="Name"/>
      <AppInput placeholder="Email"/>
      <AppInput type='textarea' placeholder="Message"/>
      <div class="form-btn">
        <Button type="submit" button-text="Send Message"/>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import './Contact.scss';
</style>