<template>
  <div>
    <h1>{{ test }}</h1>
    <span class="test"> Test </span>
  </div>
</template>

<script setup lang="ts">
const test = 'Hello world';
</script>

<style lang="scss">
.test {
  color: $my-color;
}
</style>
