<script setup lang="ts">
  /************************** 
  Base header component for the whole site
  ***************************/

  // import GodBar from './GodBar/GodBar.vue'
  // import SettingsPanelToggle from './SettingsPanel/_SettingsPanelToggle.vue'
  
defineProps<{
  msg: string
}>()
</script>

<template>

  <header class="main-header">
    <h1 class="app-title">scoopy</h1>
  </header>


</template>

<style scoped lang="scss">

</style>
