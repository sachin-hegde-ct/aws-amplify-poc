<script setup lang="ts">
interface Item {
  name: string;
  url: string;
}

interface Props {
  closeMenuLabel?: string;
  hamburgerLabel?: string;
  items: Item[];
  logOutLabel: string;
  menuLabel: string;
  testId: string;
}

const props = withDefaults(defineProps<Props>(), {
  closeMenuLabel: 'Close Menu',
  hamburgerLabel: 'Open Menu',
});
</script>
<!-- TODO: Configure and style global navigation -->
<template>
  <nav
    class="navbar navbar-expand-lg"
    :aria-label="menuLabel"
    :test-id="testId"
  >
    <!-- TODO: Remove "container-fluid" class when adding styles -->
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/" :test-id="`${testId}-home-link`">
        <img src="~@/assets/images/logo.svg" alt="Caramel Logo" />
      </NuxtLink>
      <button
        class="navbar-toggler"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarMain"
        aria-controls="navbarMain"
        aria-expanded="false"
        :aria-label="hamburgerLabel"
        :test-id="`${testId}-open-menu`"
      >
        <!-- TODO: This will be hamburger icon from icon component -->
        <img
          src="~@/assets/images/icons/icon-hamburger.svg"
          alt="Hamburger Icon"
        />
      </button>
      <div id="navbarMain" class="offcanvas offcanvas-end theme-navbar-content">
        <button
          :test-id="`${testId}-close-menu`"
          :aria-label="closeMenuLabel"
          class="navbar-toggler"
          data-bs-dismiss="offcanvas"
        >
          <!-- TODO: This will be close icon from icon component -->
          <img src="~@/assets/images/icons/icon-close.svg" alt="Close icon" />
        </button>
        <ul role="menubar">
          <li
            v-for="(item, index) in props.items"
            :key="item.name"
            role="menuitem"
            data-bs-dismiss="offcanvas"
          >
            <NuxtLink
              :test-id="`${testId}-navigation-item-${index}`"
              :to="item.url"
              class="nav-link"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
