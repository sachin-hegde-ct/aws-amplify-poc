<script setup lang="ts"></script>

<template>
  <div>
    <h1>Caramel Authentication POC</h1>
    <div class="actions">
      <SignUp />
      <ResendCode />
      <ConfirmSignup />
      <SignIn />
      <SignOut />
      <ForgotPassword />
      <ResetPassword />
      <ChangePassword />
      <VerifyPhone />
      <ConfirmPhone />
    </div>
    <div class="apis">
      <CallCognito />
      <CallApi />
    </div>
  </div>
</template>

<style scoped>
.action {
  border: 1px solid black;
  margin: 10px;
  padding: 0 20px 20px 20px;
  min-width: 250px;
  flex: 0 20%;
  margin-bottom: 2%;
  background-color: white;
}
.actions,
.apis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.api {
  border: 1px solid black;
  flex: 40%;
  margin: 10px;
  padding: 0 20px 20px 20px;
  background-color: white;
  margin-bottom: 2%;
}
</style>
