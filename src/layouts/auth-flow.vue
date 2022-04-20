<script setup lang="ts">
useNuxt2Meta({
  htmlAttrs: { lang: 'en' },
});

interface Component {
  name: string;
  url: string;
}

const components: Component[] = [
  {
    name: 'Sign in',
    url: '/auth/signin',
  },
  {
    name: 'Sign up',
    url: '/auth/signup',
  },
  {
    name: 'Forgot Password',
    url: '/auth/reset-email',
  },
  {
    name: 'Reset Password',
    url: '/auth/reset-password',
  },
  {
    name: 'My Account',
    url: '/auth/my-account',
  },
];

const mockData = {
  items: components,
  logOutLabel: '',
  menuLabel: 'Menu',
};
</script>

<template>
  <div class="theme-auth">
    <GlobalNavigation v-bind="mockData" test-id="main-nav" />
    <main class="theme-auth-inner">
      <slot />
    </main>
  </div>
</template>
