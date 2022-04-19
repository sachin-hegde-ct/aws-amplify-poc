<script setup lang="ts">
const { $auth } = useNuxtApp();

const code = ref("");
const status = ref("");

async function confirmSignUp() {
  try {
    const user = await $auth.currentAuthenticatedUser();
    if (!user) {
      status.value = "No active user";
      return;
    }

    const username = user.username;

    await $auth.confirmSignUp(username, code.value);
    status.value = `${username} confirmed`;
  } catch (error: any) {
    status.value = error.message;
    console.log("error confirming:", error.message);
  }
}
</script>

<template>
  <div class="action">
    <h2>Confirm Sign Up</h2>
    <div class="subtitle">Enter the code sent to you via email</div>

    <form @submit.prevent="confirmSignUp">
      <div>
        <label for="code">code</label>
        <input name="code" v-model="code" placeholder="code" required />
      </div>
      <button type="submit">confirm</button>
      <div class="status">
        {{ status }}
      </div>
    </form>
  </div>
</template>
