<template>
  <div class="c-register-screen">
    <h1>Welcome to tradly</h1>
    <h6>Signup to your account</h6>
    <form>
      <CustomInput type="text" placeholder="First Name" />
      <CustomInput type="text" placeholder="Last Name" />
      <CustomInput type="email" placeholder="Email" />
      <CustomInput type="password" placeholder="Password" />
      <CustomInput type="password" placeholder="Confirm Password" />
      <CustomButton text="Create" inverted />
    </form>
    <span class="c-register-screen__sign-in">
      Have an account? <a href="#">Sign in</a>
    </span>
  </div>
</template>

<script setup lang="ts">
import CustomButton from '../CustomButton/CustomButton.vue';
import CustomInput from '../CustomInput/CustomInput.vue';
const props = defineProps({});
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-register-screen {
  background-color: $dark-green;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: $white;

  h1 {
    padding-top: 40px;
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
    padding: 0px 20px;

    input {
      margin-bottom: 16px;
    }

    button {
      margin-top: 25px;
    }
  }

  &__sign-in {
    margin-top: 30px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 30px;

    a {
      font-weight: 600;
      text-decoration: none;
      color: $white;
    }
  }
}
</style>
