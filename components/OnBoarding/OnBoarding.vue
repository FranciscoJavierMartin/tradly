<template>
  <div class="c-on-boarding">
    <OnBoardingSlide />
  </div>
</template>

<script setup lang="ts">
// import { PropType } from 'vue';

// const props = defineProps({
//   slides: {
//     type: Array as PropType<Slide[]>,
//     default: () => [],
//   },
// });

// // const activeSlide = props.slides[0];
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-on-boarding {
  background: linear-gradient($dark-green 50%, $white 50%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  width: 100vw;
}
</style>
