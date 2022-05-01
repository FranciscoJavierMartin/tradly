<template>
  <div class="c-splash-screen">
    <img src="../../assets/imgs/logo.svg" />
    <h2>Tradly</h2>
  </div>
</template>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-splash-screen {
  background-color: $dark-green;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: $white;
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>
