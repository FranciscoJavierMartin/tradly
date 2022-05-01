<template>
  <div class="c-login-screen">
    <h1>Welcome to tradly</h1>
    <h6>Login to your account</h6>
    <form>
      <CustomInput type="email" placeholder="Email" />
      <CustomInput type="password" placeholder="Password" />
      <CustomButton text="Login" inverted />
    </form>
    <a href="#" class="c-login-screen__forgot-password">
      Forgot your password?
    </a>
    <span class="c-login-screen__sign-up">
      Don't have an account? <a href="#">Sign up</a>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../CustomButton/CustomButton.vue';
import CustomInput from '../CustomInput/CustomInput.vue';
const props = defineProps({});

const test = ref('');
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-login-screen {
  background-color: $dark-green;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      margin-bottom: 16px;
    }

    button {
      margin-top: 38px;
    }
  }

  &__forgot-password {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-decoration: none;
    color: $white;
  }

  &__sign-up {
    margin-top: 30px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    a {
      font-weight: 600;
      text-decoration: none;
      color: $white;
    }
  }
}
</style>
