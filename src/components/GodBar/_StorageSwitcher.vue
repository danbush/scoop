<script setup lang="ts">
  /************************** 
  Theme Switcher component
  todo: fill out this section
  ***************************/

  defineProps<{
    swichState: boolean,
  }>()
  
</script>

<template>

  <div class="toggle toggle_storage">
    <p class="toggle-label">LocalStorage</p>
    <label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  </div>

</template>

<style scoped lang="scss">

</style>
