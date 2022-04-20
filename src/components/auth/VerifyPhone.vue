<script setup lang="ts">
const { $auth } = useNuxtApp();

const status = ref("");

async function verifyPhone() {
  try {
    status.value = "";
    await $auth.verifyCurrentUserAttribute("phone_number");
    status.value = "started verification";
    await $auth.signOut();
  } catch (error) {
    console.log("error verifying phone", error);
    status.value = "error verifying phone";
  }
}
</script>

<template>
  <div class="action">
    <h2>Verify Phone</h2>
    <div class="subtitle">Initiate Phone verification process</div>
    <button @click="verifyPhone">verify phone</button>
    <div class="status">
      {{ status }}
    </div>
  </div>
</template>
