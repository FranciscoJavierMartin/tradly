<template>
  <button
    class="c-custom-button"
    :class="{ 'c-custom-button--inverted': inverted }"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function as PropType<(payload: MouseEvent) => void>,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: (payload: MouseEvent) => {},
  },
  inverted: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-custom-button {
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

  &--inverted {
    background-color: $white;
    color: $light-green;
  }
}
</style>
