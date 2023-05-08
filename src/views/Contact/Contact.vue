<template>
  <div class="main-contact">
    <div class="contact-text">
      <p class="title">Contact</p>
      <p class="sub-title">
        I would love to hear about your project and how I could help.
        Please fill in the form, and I’ll get back to you as soon as possible.
      </p>
    </div>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="input-div">
        <div>
          <Caution class="input-right-icon" v-show="v$.name.$error"/>
          <input 
            type="text" 
            name="name"
            :class="(v$.name.$error & v$.name.$dirty) ? 'input error-input' : v$.name.$dirty ? 'input success-input' : 'input'" placeholder="Name" 
            v-model="state.name"
            @blur="v$.name.$touch"
          >
        </div>
        <div class="error-span">
          <span v-if="v$.name.$error" class="error-message">{{ v$.name.$errors[0].$message }}</span>
        </div>
      </div>
      <div class="input-div">
        <div>
          <Caution class="input-right-icon" v-show="v$.email.$error"/>
          <input 
            type="email"
            name="email"
            :class="(v$.email.$error & v$.email.$dirty) ? 'input error-input' : v$.email.$dirty ? 'input success-input' : 'input'"
            placeholder="Email"
            v-model="state.email"
            @blur="v$.email.$touch"
          >
        </div>
        <div class="error-span">
          <span v-if="v$.email.$error" class="error-message">{{ v$.email.$errors[0].$message }}</span>
        </div>
      </div>
      <div class="input-div">
        <div>
          <Caution class="input-right-icon" v-show="v$.message.$error"/>
          <textarea
            cols="10"
            rows="10"
            name="message"
            :class="(v$.message.$error & v$.message.$dirty) ? 'input error-input' : v$.message.$dirty ? 'input success-input' : 'input'"
            placeholder="Message"
            v-model="state.message"
            @blur="v$.message.$touch"
          ></textarea>
        </div>
        <div class="error-span">
          <span v-if="v$.message.$error" class="error-message">{{ v$.message.$errors[0].$message }}</span>
        </div>
      </div>
      <div class="form-btn">
        <Button type="submit" :button-text="loadingState ? 'Loading...' : 'Send Message'" id="submit-btn" :disabled="v$.name.$error || v$.email.$error|| v$.message.$error || loadingState"/>
      </div>
    </form>
  </div>
</template>

<script>
import Button from '../../components/Button/Button.vue';
import { reactive, computed, ref } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import Caution from '../../components/icons/Caution.vue';
export default {
  components: {
    Button,
    Caution
  },
  setup() {
    // Reactive States
    const state = reactive({
      name: '',
      email: '',
      message: ''
    })

    const loadingState = ref(false)
    
    // Computed Properties
    const rules = computed(() => {
      return {
        name: { required },
        email: { required, email: helpers.withMessage('Sorry, invalid format here', email) },
        message: { required }
      }
    })
    
    // Vuelidate Instance
    const v$ = useValidate(rules, state)

    // Methods
    const handleSubmit = () => {
      loadingState.value = true
      v$.value.$validate()
      if (!v$.value.$error) {
        const url = import.meta.env.VITE_AIRTABLE_URL;
        const data = {
          records: [
            {
              fields: {
                "Name": state.name.toUpperCase(),
                "Email Address": state.email,
                "Message": state.message
              }
            }
          ]
        }
        const options = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`
          },
          body: JSON.stringify(data)
        }
  
        fetch(url, options)
          .then(response => response.json())
          .then(data => {
            clearFields()
            alert("Thank you for the message :)")
          })
          .catch(err => {
            clearFields()
            alert("There was an error, please try again")
          })
          .finally(() => {
            loadingState.value = false
          })
      } else {
        loadingState.value = false
      }
    }

    const clearFields = () => {
      state.name = ''
      state.email = ''
      state.message = ''
      v$.value.name.$dirty = false
      v$.value.email.$dirty = false
      v$.value.message.$dirty = false
    }


    return { state, v$, loadingState, handleSubmit }
  }

}

</script>

<style lang="scss" scoped>
@import './Contact.scss';
</style>