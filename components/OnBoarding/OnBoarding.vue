<template>
  <div class="c-on-boarding">
    <OnBoardingSlide
      :current-index="currentIndex"
      :amount-of-slides="slides.length"
      :slide="currentSlide"
      @next-slide="nextSlide"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue';
import { Slide } from '@/components/OnBoardingSlide/types';
import OnBoardingSlide from '../OnBoardingSlide/OnBoardingSlide.vue';

const props = defineProps({
  slides: {
    type: Array as PropType<Slide[]>,
    default: () => [],
  },
});

const currentIndex = ref<number>(1);

const currentSlide = computed<Slide>(
  () => props.slides[currentIndex.value - 1]
);

function nextSlide(): void {
  currentIndex.value = (currentIndex.value % 3) + 1;
}
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
