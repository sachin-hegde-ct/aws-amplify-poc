<script setup lang="ts">
const { $auth } = useNuxtApp();

const email = ref("");
const password = ref("");
const status = ref("");

async function signIn() {
  try {
    console.table({ userName: email.value, password: password.value });
    const user = await $auth.signIn(email.value, password.value);
    status.value = `${user.username} signed in!`;
  } catch (error) {
    console.log(error.message);
    status.value = error.message;
  }
}
</script>

<template>
  <div class="action">
    <h2>Sign In</h2>
    <div class="subtitle">Log on to Caramel</div>

    <form @submit.prevent="signIn">
      <div>
        <label for="email">email</label>
        <input name="email" v-model="email" placeholder="email" required />
      </div>
      <div>
        <label for="password">password</label>
        <input
          name="password"
          v-model="password"
          placeholder="password"
          type="password"
          required
        />
      </div>
      <button type="submit">sign in</button>
      <div class="status">
        {{ status }}
      </div>
    </form>
  </div>
</template>
