<script setup lang="ts">
const { $auth } = useNuxtApp();

const currentpassword = ref("");
const newpassword = ref("");
const status = ref("");

async function changePassword() {
  try {
    const user = await $auth.currentAuthenticatedUser();
    if (!user) {
      status.value = "No active user";
      return;
    }

    const data = await $auth.changePassword(
      user,
      currentpassword.value,
      newpassword.value
    );
    console.log(data);
    status.value = "password changed";
  } catch (error: any) {
    status.value = error.message;
    console.log("error changing password:", error.message);
  }
}
</script>

<template>
  <div class="action">
    <h2>Change Password</h2>
    <div class="subtitle">Update your password to a new one</div>

    <form @submit.prevent="changePassword">
      <div>
        <label for="currentpassword">old password</label>
        <input
          name="currentpassword"
          type="password"
          v-model="currentpassword"
          placeholder="current password"
          required
        />
      </div>
      <div>
        <label for="newpassword">new password</label>
        <input
          name="newpassword"
          type="password"
          v-model="newpassword"
          placeholder="new password"
          required
        />
      </div>
      <button type="submit">change</button>
      <div class="status">
        {{ status }}
      </div>
    </form>
  </div>
</template>
