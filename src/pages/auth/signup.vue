<script setup lang="ts">
import { AnyObject } from "yup/lib/types";
import { useSignUpValidations } from "~~/src/composables/schemas/signUpSchema";

// definePageMeta({
//   htmlAttrs: { lang: 'en' },
//   layout: 'auth-flow',
// });

const schema = useSignUpValidations();
const { $auth } = useNuxtApp();

// TODO Temporary signup success or failure message. Remove it once the actual screen available

async function signUp(values: AnyObject) {
  console.log("values", values);
  try {
    const response = await $auth.signUp({
      username: values.email,
      password: values.password,
      attributes: {
        given_name: values.firstName,
        family_name: values.lastName,
        phone_number: values.phoneNumber,
        email: values.email,
      },
    });
    console.log(response);
    // message = `${response.user.getUsername()} : Check your email`;
  } catch (error) {
    console.log(error.message);
    // message = error.message;
  }
}
</script>

<template>
  <BaseCard base-card>
    <h1>Create a account</h1>
    <h2>Your perfect car is steps away!</h2>
    <BaseForm :schema="schema" @submit="signUp">
      <BaseInput
        id="firstName"
        name="firstName"
        label="First Name"
        type="text"
        test-id="SignUpFn-1"
      />
      <BaseInput
        id="lastName"
        name="lastName"
        label="Last Name"
        type="text"
        test-id="SignUpLn-1"
      />
      <BaseInput
        id="email"
        name="email"
        label="Email Address"
        type="email"
        test-id="SignUpEmail-1"
      />
      <BaseInput
        id="phoneNumber"
        name="phoneNumber"
        label="Mobile Phone Number"
        type="tel"
        test-id="SignUpTel-1"
      />
      <BaseInput
        id="password"
        name="password"
        label="Password (Min 8 Characters)"
        type="password"
        test-id="SignUpPassword-1"
      />
    </BaseForm>
    <p>
      By clicking the "Sign Up" button you confirm that you have read and agree
      to the <nuxt-link to="/">Terms of Use</nuxt-link>,
      <nuxt-link to="/">Privacy Policy</nuxt-link>,
      <nuxt-link to="/">TCPA Policy?</nuxt-link>, &#38;
      <nuxt-link to="/">ESIGN Policy.</nuxt-link>
    </p>
    <p>We keep your information private and secure.</p>
  </BaseCard>
</template>
