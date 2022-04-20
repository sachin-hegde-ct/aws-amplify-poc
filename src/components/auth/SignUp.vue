<script setup lang="ts">
const { $auth } = useNuxtApp();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");

const status = ref("");

async function signUp() {
  console.table({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phone.value,
    password: password.value,
  });
  try {
    const response = await $auth.signUp({
      username: email.value,
      password: password.value,
      attributes: {
        given_name: firstName.value,
        family_name: lastName.value,
        phone_number: phone.value,
        email: email.value,
      },
    });
    console.log(response);
    status.value = `${response.user.getUsername()} : Check your email`;
  } catch (error) {
    console.log(error.message);
    status.value = error.message;
  }
}
</script>

<template>
  <div class="action">
    <h2>Sign Up</h2>
    <div class="subtitle">Register as a new user using your email</div>

    <form @submit.prevent="signUp">
      <div>
        <label for="firstName">first name</label>
        <input
          name="firstName"
          v-model="firstName"
          placeholder="first name"
          required
        />
      </div>
      <div>
        <label for="lastName">last name</label>
        <input
          name="lastName"
          v-model="lastName"
          placeholder="last name"
          required
        />
      </div>
      <div>
        <label for="email">email</label>
        <input name="email" v-model="email" placeholder="email" required />
      </div>
      <div>
        <label for="phone">phone</label>
        <input name="phone" v-model="phone" placeholder="phone" required />
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
      <div>
        <button type="submit">sign up</button>
      </div>
      <div class="status">
        {{ status }}
      </div>
    </form>
  </div>
</template>
