<template>
  <div class="c-on-boarding-slide">
    <img :src="slide.img" :alt="slide.text" />
    <h3>{{ slide.text }}</h3>
    <div class="c-on-boarding-slide__steps">
      <div
        v-for="index in amountOfSlides"
        :key="index"
        :class="{
          'c-on-boarding-slide__steps--active': currentIndex === index,
        }"
      />
    </div>
    <button @click="onClick">
      {{ currentIndex === amountOfSlides ? 'Finish' : 'Next' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Slide } from './types';

const props = defineProps({
  slide: {
    type: Object as PropType<Slide>,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
  amountOfSlides: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['next']);

function onClick(): void {
  emit('next');
}
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-on-boarding-slide {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  row-gap: 15px;

  img {
    background-color: $white;
    border-radius: 8px;
    padding: 40px 5px 5px;
    width: 70%;
  }

  h3 {
    color: $dark-green;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.482353px;
    line-height: 30px;
    text-align: center;
  }

  &__steps {
    display: flex;

    > div {
      background: $light-green;
      border-radius: 50%;
      height: 12px;
      margin: 5px;
      mix-blend-mode: normal;
      opacity: 0.6;
      width: 12px;

      &.c-on-boarding-slide__steps--active {
        background-color: $dark-green;
        opacity: 1;
      }
    }
  }

  button {
    background-color: $dark-green;
    border-radius: 24px;
    border: none;
    color: $white;
    font-family: $monserrat-font;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }
}
</style>
