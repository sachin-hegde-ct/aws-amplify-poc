<script setup lang="ts">
const { $auth, $api } = useNuxtApp();

const endpoint = "/getUser";
const result = ref("");
const status = ref("");

async function callAPI() {
  try {
    const user = await $auth.currentAuthenticatedUser();
    if (!user) {
      status.value = "No active user";
      return;
    }

    const username = user.username;

    status.value = "";
    result.value = "";
    const config = {
      queryStringParameters: {
        username: username,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${(await $auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    result.value = await $api.get("AdminQueries", "/getUser", config);
    status.value = "retrieved user info from Cognito";
    console.log(result.value);
  } catch (error) {
    status.value = "error retrieving info";
    result.value = error;
    console.error(error);
  }
}
</script>

<template>
  <div class="api">
    <h2>Call Admin Only API</h2>
    <div class="subtitle">Call Cognito endpoint to get user info</div>

    <p>{{ endpoint }}</p>
    <button @click="callAPI">call</button>
    <div class="status">
      {{ status }}
      <hr />
      {{ result }}
    </div>
  </div>
</template>
