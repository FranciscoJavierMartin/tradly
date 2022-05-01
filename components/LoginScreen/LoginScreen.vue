<template>
  <div class="c-login-screen">
    <h1>Welcome to tradly</h1>
    <h6>Login to your account</h6>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <CustomButton text="Login" inverted />
    </form>
    <a class="c-login-screen__forgot-password">Forgot you password?</a>
    <span class="c-login-screen__sign-up"
      >Don't have an account? <a>Sign up</a></span
    >
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

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 29px;
  }

  h6 {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }

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

  &__forgot-password {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
  }

  &__sign-up {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    a {
      font-weight: 600;
    }
  }
}
</style>
