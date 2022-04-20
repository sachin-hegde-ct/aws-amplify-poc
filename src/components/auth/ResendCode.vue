<script setup lang="ts">
const { $auth } = useNuxtApp();

const email = ref("");
const status = ref("");

async function resendCode() {
  try {
    await $auth.resendSignUp(email.value);
    status.value = email.value + " sent code!";
    console.log("resent code");
  } catch (error: any) {
    status.value = error.message;
    console.error("error sending code:", error.message);
  }
}
</script>

<template>
  <div class="action">
    <h2>Resend Code</h2>
    <div class="subtitle">Resend the sign up code to your email</div>

    <form @submit.prevent="resendCode">
      <div>
        <label for="email">email</label>
        <input name="email" v-model="email" placeholder="email" required />
      </div>
      <div>
        <button type="submit">resend code</button>
      </div>
      <div class="status">
        {{ status }}
      </div>
    </form>
  </div>
</template>
