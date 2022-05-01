<template>
  <input class="c-custom-input" v-bind="props" />
</template>

<script setup lang="ts">
const props = defineProps({});
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.c-custom-input {
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
</style>
