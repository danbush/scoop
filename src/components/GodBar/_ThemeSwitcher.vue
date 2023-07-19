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

  <div class="toggle toggle_theme">
    <p class="toggle-label">Theme</p>
    <label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  </div>

</template>

<style scoped lang="scss">

</style>
