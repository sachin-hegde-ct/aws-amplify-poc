<script setup lang="ts">
// definePageMeta({
//   htmlAttrs: { lang: 'en' },
//   layout: 'auth-flow',
// });

const { $auth } = useNuxtApp();

const email = ref("");
const code = ref("");
const newPassword = ref("");

// TODO Temporary Reset Password success or failure message. Remove it once the actual screen available
const message = ref("");

async function resetPassword() {
  console.table({
    email: email.value,
    code: code.value,
    password: newPassword.value,
  });

  try {
    const response = await $auth.forgotPasswordSubmit(
      email.value,
      code.value,
      newPassword.value
    );
    console.log(response);
    message.value = `Password reset successful`;
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
    <h1>New Password</h1>
    {{ message }}
    <form @submit.prevent="resetPassword">
      <input id="email" v-model="email" name="email" placeholder="email" />
      <input id="code" v-model="code" placeholder="Code" />
      <input
        id="newPassword"
        v-model="newPassword"
        placeholder="New Password"
      />
      <BaseButton type="submit" label="Reset " variation="primary" />
    </form>
    <nuxt-link to="/">Forgot your password?</nuxt-link>
  </BaseCard>
</template>
