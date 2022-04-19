<script setup lang="ts">
const { $auth } = useNuxtApp();

const email = ref("");
const code = ref("");
const password = ref("");
const status = ref("");

async function resetPassword() {
  console.table({
    email: email.value,
    code: code.value,
    password: password.value,
  });

  try {
    const response = await $auth.forgotPasswordSubmit(
      email.value,
      code.value,
      password.value
    );
    console.log(response);
    status.value = `Password reset successful`;
  } catch (error) {
    console.log(error.message);
    status.value = error.message;
  }
}
</script>

<template>
  <div class="action">
    <h2>Reset Password</h2>
    <div class="subtitle">Use reset code to set new password</div>

    <form @submit.prevent="resetPassword">
      <div>
        <label for="email">email</label>
        <input name="email" v-model="email" placeholder="email" required />
      </div>
      <div>
        <label for="code">code</label>
        <input name="code" v-model="code" placeholder="code" required />
      </div>
      <div>
        <label for="password">new password</label>
        <input
          name="password"
          v-model="password"
          placeholder="password"
          type="password"
          required
        />
      </div>
      <button type="submit">reset</button>
      <br /><br />
      <div class="status">
        {{ status }}
      </div>
    </form>
  </div>
</template>
