<script setup lang="ts">
interface Component {
  name: string;
  url: string;
}

// TODO POC : definePageMeta equivalent in Nuxt-Bridge
// definePageMeta({
//   layout: false,
// });

useNuxt2Meta({
  htmlAttrs: { lang: "en" },
  title: "CARAMEL | Component Library",
  layout: false,
});

const components: Component[] = [
  {
    name: "Accordion",
    url: "/component-library/accordion",
  },
  {
    name: "Alerts",
    url: "/component-library/alerts",
  },
  {
    name: "Buttons",
    url: "/component-library/buttons",
  },
  {
    name: "Cards",
    url: "/component-library/cards",
  },
  {
    name: "Dropdown",
    url: "/component-library/dropdown",
  },
  {
    name: "Form Inputs",
    url: "/component-library/form-inputs",
  },
  {
    name: "Modals",
    url: "/component-library/modals",
  },
  {
    name: "Typography",
    url: "/component-library/typography",
  },
];

const mockData = {
  items: components,
  logOutLabel: "",
  menuLabel: "Component library Menu",
};
</script>
<template>
  <div>
    <header class="mb-5">
      <GlobalNavigation v-bind="mockData" test-id="main-nav" />
    </header>
    <main class="d-flex flex-column">
      <!-- <NuxtNestedPage /> -->
      <nuxt-child></nuxt-child>
    </main>
  </div>
</template>
<!-- Styling on the page for component library ONLY -->
<style>
li {
  list-style: none;
}

.nav-link:hover {
  color: black;
}

.navbar-toggler {
  text-align: right;
}
</style>
