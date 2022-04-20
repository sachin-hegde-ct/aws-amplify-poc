<script setup lang="ts">
// definePageMeta({
//   htmlAttrs: { lang: 'en' },
//   layout: 'auth-flow',
// });

const { $auth } = useNuxtApp();

const email = ref("");

// TODO Temporary Forgot Password success or failure message. Remove it once the actual screen available
const message = ref("");

async function resetPassword() {
  console.table({
    email: email.value,
  });

  try {
    const response = await $auth.forgotPassword(email.value);
    console.log(response);
    message.value =
      "reset code sent to " + response.CodeDeliveryDetails.Destination;
  } catch (error) {
    console.log(error.message);
    message.value = error.message;
  }
}
</script>

<template>
  <!-- // TODO Remove basic input and uncomment above BaseInputs once it is // // //
  working as expected -->
  <BaseCard base-card>
    <h1>Reset your password with email</h1>
    {{ message }}
    <form @submit.prevent="resetPassword">
      <input id="email" v-model="email" placeholder="email" />

      <BaseButton type="submit" label="Reset " variation="primary" />
    </form>
    <nuxt-link to="/">Forgot your password?</nuxt-link>
  </BaseCard>
</template>
