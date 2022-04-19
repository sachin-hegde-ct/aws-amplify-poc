<script setup lang="ts">
const { $auth, $api } = useNuxtApp();
const endpoint = ref("Endpoint would be: https://api.drivecaramel.com/hello");
const result = ref("");
const status = ref("");

async function callAPI() {
  try {
    status.value = "";
    result.value = "";
    const session = await $auth.currentSession();
    const accessToken = session.getAccessToken();
    const JWT = accessToken.getJwtToken();
    console.log(JWT);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JWT}`,
      },
      response: false,
    };
    result.value = await $api.get("users", "/users", config);
    status.value = "retrieved info from API";
    console.log(result.value);
  } catch (error: any) {
    status.value = "error retrieving info";
    result.value = error?.message ? error.message : error;
    console.error(error);
  }
}
</script>

<template>
  <div class="api">
    <h2>Call Authenticated User API</h2>
    <div class="subtitle">Call the Caramel API for a user</div>
    <p>{{ endpoint }}</p>
    <button @click="callAPI">call</button>
    <div class="status">
      {{ status }}
      <hr />
      {{ result }}
    </div>
  </div>
</template>
