<template>
  <div class="c-splash-screen">
    <div class="c-splash-screen__animation-container">
      <img src="../../assets/imgs/logo.svg" alt="Tradly logo" />
      <h2>Tradly</h2>
    </div>
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

  &__animation-container {
    display: flex;
    flex-direction: column;
    animation: increase-size 2s ease infinite;

    @keyframes increase-size {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.1);
      }

      100% {
        transform: scale(1);
      }
    }

    h2 {
      color: $white;
      font-weight: 500;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>
