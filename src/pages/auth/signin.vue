<script setup lang="ts">
import { AnyObject } from 'yup/lib/types';
import { useSignInValidations } from '~~/src/composables/schemas/signInSchema';

// definePageMeta({
//   htmlAttrs: { lang: "en" },
//   layout: "auth-flow",
// });

const schema = useSignInValidations();

const { $auth } = useNuxtApp();

const authenticated = ref(false);

async function signIn(values: AnyObject) {
  console.log(values);
  // try {
  //   console.table({ userName: values.userName, password: values.password });
  //   const response = await $auth.signIn(values.userName, values.password);
  //   console.log(response);
  // } catch (error) {
  //   console.log(error.message);
  // }
}

onMounted(async function () {
  try {
    authenticated.value = !!(await $auth.currentAuthenticatedUser());
  } catch (error) {
    authenticated.value = false;
  }
});
</script>

<template>
  <BaseCard base-card>
    <h1>Sign In</h1>
    <h2>Welcome Back</h2>
    <!-- <BaseForm :schema="schema" @submit="signIn">
      <BaseInput
        id="userName"
        test-id="SignInEmail-1"
        type="email"
        label="Email Address"
        name="userName"
      />
      <BaseInput
        id="Password"
        test-id="SignInPassword-1"
        type="password"
        label="Password"
        name="password"
      />
    </BaseForm> -->
    <BaseForm2 :submit="signIn">
      <BaseInput
        id="userName"
        test-id="SignInEmail-1"
        type="email"
        label="Email Address"
        name="userName"
      />
      <BaseInput
        id="Password"
        test-id="SignInPassword-1"
        type="password"
        label="Password"
        name="password"
      />
    </BaseForm2>
    <nuxt-link to="/">Forgot your password?</nuxt-link>
  </BaseCard>
</template>
