<script setup lang="ts">
  /************************** 
  Theme Switcher component
  todo: fill out this section
  ***************************/

  /*  Dark Mode toggle
  https://www.vuemastery.com/blog/implementing-dark-mode-with-vueuse/

  For future reference (additional themes:)
  https://vueuse.org/core/useColorMode/

  */
  import { useDark, useToggle } from "@vueuse/core";
  const isDark = useDark({
    selector: "html",
  });
  const toggleDark = useToggle(isDark);

  function toggleThemeSupport() {
    document.body.classList.toggle('devmode-themesupport')
  }

</script>

<template>

  <div class="toggle toggle_theme">
    <p class="toggle-label">Theme</p>

    <label class="switch">
      <input type="checkbox" @click="toggleDark()" />
      <span class="slider"></span>
    </label>

  </div>

</template>

<style scoped lang="scss">

</style>
