<script setup lang="ts">
  /************************** 
  Theme Switcher component
  todo: fill out this section
  ***************************/

  function toggleLocalStorage() {
    document.body.classList.toggle('devmode-localstorage')
  }

</script>

<template>

  <div class="toggle toggle_storage">
    <p class="toggle-label">LocalStorage</p>
    <label class="switch">
      <input type="checkbox" v-on:click="toggleLocalStorage" />
      <span class="slider"></span>
    </label>
  </div>

</template>

<style scoped lang="scss">

</style>
