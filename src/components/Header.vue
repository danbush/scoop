<script setup lang="ts">
  /************************** 
  Base header component for the whole site
  ***************************/
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

  font-family: "BitterPro", 'Courier New', Courier, monospace;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.3;
  text-align: center;

  color: $foreground-primary;

  background-color: $background-light;

}
</style>
