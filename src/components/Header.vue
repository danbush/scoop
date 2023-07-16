<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <header class="main-header">
    {{msg}}
  </header>
</template>

<style scoped lang="scss">
header.main-header {
  width: 100%;
  height: 50px;
  background-color: $background-light;
  color: black;
  text-align: center;
  font-family: "BitterPro", 'Courier New', Courier, monospace;
  font-weight: 900;
  font-size: 2rem;
  color: $foreground-primary;
}
</style>
