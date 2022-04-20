<script setup lang="ts">
// definePageMeta({
//   htmlAttrs: { lang: 'en' },
//   layout: 'auth-flow',
// });

const { $auth } = useNuxtApp();
const authenticated = ref(false);
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phoneNumber = ref('');

onMounted(async function () {
  try {
    authenticated.value = !!(await $auth.currentAuthenticatedUser());
    const { attributes } = await $auth.currentAuthenticatedUser();
    firstName.value = attributes.given_name;
    lastName.value = attributes.family_name;
    email.value = attributes.email;
    phoneNumber.value = attributes.phone_number;
  } catch (error) {
    authenticated.value = false;
  }
});
</script>

<template>
  <BaseCard base-card>
    <h1>Hello, {{ firstName }}!</h1>
    <p>Here are your account details.</p>
    <ul class="main-content">
      <li>
        <p>
          First Name: <span>{{ firstName }}</span>
        </p>
      </li>
      <li>
        <p>
          Last Name: <span>{{ lastName }}</span>
        </p>
      </li>
      <li>
        <p>
          Phone Number: <span>{{ phoneNumber }}</span>
        </p>
      </li>
      <li>
        <p>
          Email: <span>{{ email }}</span>
        </p>
      </li>
      <li class="password-field">
        <!-- TODO: We will have to add icon component -->
        <p>Password: <span>************</span></p>
      </li>
      <BaseButton
        label="Sign Out"
        size="sm"
        variation="secondary"
        test-id="TestDemo-1"
      />
    </ul>
    <div class="links">
      <nuxt-link to="/">Terms & Conditions</nuxt-link>
      <nuxt-link to="/">Privacy Policy</nuxt-link>
    </div>
  </BaseCard>
</template>
