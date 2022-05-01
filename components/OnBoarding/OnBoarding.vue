<template>
  <div class="c-on-boarding">
    <div>
      <img src="../../assets/imgs/on-boarding-step-1.svg" />
      <h3>Empowering Artisans, Farmers & Micro Business</h3>
    </div>
    <div class="steps">
      <div class="active"></div>
      <div></div>
      <div></div>
    </div>
    <button>Next</button>
  </div>
</template>

<script setup lang="ts">
// const props = defineProps({});
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-on-boarding {
  display: flex;
  flex-direction: column;
  padding: 15px;

  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.482353px;
    color: $dark-green;
  }

  .steps {
    display: flex;

    div {
      margin: 5px;
      width: 12px;
      height: 12px;
      background: $light-green;
      border-radius: 50%;
      opacity: 0.6;
      mix-blend-mode: normal;

      &.active {
        background-color: $dark-green;
        opacity: 1;
      }
    }
  }

  button {
    font-family: $monserrat-font;
    background-color: $dark-green;
    border-radius: 24px;
    color: $white;
    text-align: center;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    text-decoration: none;
    border: none;
    padding: 15px;
  }
}
</style>
