<template>
  <div class="c-login-screen">
    <h1>Welcome to tradly</h1>
    <span>Login to your account</span>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <CustomButton text="Login" inverted />
    </form>
    <a>Forgot you password?</a>
    <span>Don't have an account?</span> <a>Sign up</a>
  </div>
</template>

<script setup lang="ts">
import CustomButton from '../CustomButton/CustomButton.vue';
const props = defineProps({});
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-login-screen {
  background-color: $dark-green;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: $white;

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;

    input {
      color: $white;
      background-color: $dark-green;
      border: 1px solid $white;
      border-radius: 24px;
      font-family: $monserrat-font;
      font-weight: normal;
      line-height: 22px;
      padding: 10px;

      &::placeholder {
        color: $white;
        background-color: $dark-green;
      }
    }
  }
}
</style>
