<script setup lang="ts">
const { $auth } = useNuxtApp();

const code = ref("");
const status = ref("");

async function confirmPhone() {
  const strCode = code.value.toString();
  try {
    status.value = "";
    await $auth.verifyCurrentUserAttributeSubmit("phone_number", strCode);
    status.value = "phone number confirmed";
    await $auth.signOut();
  } catch (error) {
    console.log("error confirming phone", error);
    status.value = "error confirming phone";
  }
}
</script>

<template>
  <div class="action">
    <h2>Confirm Phone</h2>
    <div class="subtitle">Confirm Phone</div>
    <div>
      <label for="code">code</label>
      <input name="code" v-model="code" placeholder="code" required />
    </div>

    <button @click="confirmPhone">confirm phone</button>
    <div class="status">
      {{ status }}
    </div>
  </div>
</template>
