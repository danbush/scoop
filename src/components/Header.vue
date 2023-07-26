<script setup lang="ts">
  /************************** 
  Base header component for the whole site
  ***************************/

  import GodBar from './GodBar/GodBar.vue'
  
defineProps<{
  msg: string
}>()
</script>

<template>
  <header class="main-header">

    <h1 class="app-title">{{msg}}</h1>
    
    <GodBar />

  </header>
</template>

<style scoped lang="scss">
header.main-header {

  background: pink;

  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  max-width: 100%;
  width: 100%;
  height: auto;
  padding: 0 1rem;
  
  color: $background-light;

  background-color: $background;

  .app-title {
    font-family: "BitterPro", 'Courier New', Courier, monospace;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.3;
    text-align: center;
  }

}
</style>
