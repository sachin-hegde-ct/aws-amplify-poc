<script setup lang="ts">
const { $auth } = useNuxtApp();

const status = ref("");

async function signOut() {
  try {
    status.value = "";
    await $auth.signOut();
    status.value = "signed out";
  } catch (error) {
    console.log("error signing out", error);
    status.value = "error signing out";
  }
}
</script>

<template>
  <div class="action">
    <h2>Sign Out</h2>
    <div class="subtitle">Log off of Caramel</div>
    <button @click="signOut">sign out</button>
    <div class="status">
      {{ status }}
    </div>
  </div>
</template>
