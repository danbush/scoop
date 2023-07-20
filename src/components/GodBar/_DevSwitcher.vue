<script setup lang="ts">
  /************************** 
  DevMode Switcher component
  todo: fill out this section
  ***************************/

  function toggleDevMode() {
    document.body.classList.toggle('devmode-on')
  }

</script>

<template>

  <div class="toggle toggle_DevMode">
    <p class="toggle-label">DevMode</p>
    <label class="switch">
      <input type="checkbox" v-on:click="toggleDevMode" />
      <span class="slider"></span>
    </label>
  </div>

</template>

<style scoped lang="scss">

</style>
