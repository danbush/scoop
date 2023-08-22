<script setup lang="ts">
  defineProps<{
    inputName: string,        // label
    inputClass: string,       // custom class
    inputState: string,       // vue.js state
    inputFunction: string,    //
  }>()

</script>

<template>

  <div class="toggle toggle_{{inputClass}}">
    <p class="toggle-label">{{inputName}}</p>
    <label class="switch">
      <input type="checkbox" v-on:click="toggleLocalStorage" />
      <span class="slider"></span>
    </label>
  </div>

</template>

<style scoped lang="scss">

</style>