<script setup lang="ts">
const { $auth } = useNuxtApp();

const email = ref("");
const status = ref("");

async function forgotPassword() {
  console.table({
    email: email.value,
  });

  try {
    const response = await $auth.forgotPassword(email.value);
    console.log(response);
    status.value =
      "reset code sent to " + response.CodeDeliveryDetails.Destination;
  } catch (error) {
    console.log(error.message);
    status.value = error.message;
  }
}
</script>

<template>
  <div class="action">
    <h2>Forgot Password</h2>
    <div class="subtitle">Send a reset code to your email</div>

    <form @submit.prevent="forgotPassword">
      <div>
        <label for="email">email</label>
        <input name="email" v-model="email" placeholder="email" required />
      </div>
      <button type="submit">send code</button>
      <div class="status">
        {{ status }}
      </div>
    </form>
  </div>
</template>
