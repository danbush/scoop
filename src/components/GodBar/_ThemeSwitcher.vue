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
  import { useColorMode } from '@vueuse/core'
  const colorMode = useColorMode({
    emitAuto: true,
    attribute: 'class',
    modes: {
      light: 'theme-light',
      dark: 'theme-dark',
      snes: 'theme-snes',
      snes_dark: 'theme-snes-dark',
      lol: 'theme-lol',
      goots: 'theme-goots',
      arc: 'theme-arc',
    },
  })


  function toggleThemeSupport() {
    document.body.classList.toggle('devmode-themesupport')
  }

</script>

<template>

  <div class="toggle toggle_theme">
    <p class="toggle-label">Theme</p>
<!--     <select name="" id="">
      <option
        value="theme-default-light"
        @click="colorMode = 'theme-light'"
        >
        Default (Light)
      </option>
      <option value="theme-default-dark">Default (Dark)</option>
      <option value="theme-snes-light">SNES (Light)</option>
      <option
        value="theme-snes-dark"
        @click="colorMode = 'theme-snes-dark'"
        >
        SNES (Dark)
      </option>
      <option value="theme-lol">LOL</option>
    </select>
 -->
    <button @click="colorMode = 'theme-light'">Light Mode</button>
    <button @click="colorMode = 'theme-dark'">Dark Mode</button>
    <button @click="colorMode = 'theme-snes'">SNES</button>
    <button @click="colorMode = 'theme-snes-dark'">SNES (Dark)</button>
    <button @click="colorMode = 'theme-lol'">4THELULZ</button>
    <button @click="colorMode = 'theme-goots'">GOOTS</button>
    <button @click="colorMode = 'theme-arc'">Arc</button>
      
<!--     <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
    Mode {{ mode }}
    </button>
 -->    
  </div>

</template>

<style scoped lang="scss">

</style>
