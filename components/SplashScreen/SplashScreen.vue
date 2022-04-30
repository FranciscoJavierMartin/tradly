<template>
  <div>
    <h1 class="test">{{ test }}</h1>
  </div>
</template>

<script setup lang="ts">
const test = 'Hello world';
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.test {
  color: $my-color;
}
</style>
