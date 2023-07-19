<script setup lang="ts">
  /************************** 
  DevMode Switcher component
  todo: fill out this section
  ***************************/

  defineProps<{
    swichState: boolean,
  }>()
  
</script>

<template>

  <div class="toggle toggle_DevTips">
    <p class="toggle-label">DevTips</p>
    <label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  </div>

</template>

<style scoped lang="scss">

</style>
