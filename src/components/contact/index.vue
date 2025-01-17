<script setup lang="ts">
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: string) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    email(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    message(value: string) {
      if (value?.length >= 2 && value?.length < 200) return true;

      return "Message must be at least 2 characters and less than 200 characters";
    },
  },
});
const name = useField("name");
const email = useField("email");
const message = useField("message");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="contact-form-container">
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-textarea
        v-model="message.value.value"
        :error-messages="message.errorMessage.value"
        label="Message"
        variant="outlined"
        counter
        no-resize
      >
      </v-textarea>

      <v-btn class="me-4" type="submit"> submit </v-btn>

      <v-btn @click="handleReset"> clear </v-btn>
    </form>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/contact.css";
</style>
