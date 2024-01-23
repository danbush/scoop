<script setup lang="ts">
  /************************** 
  Theme Switcher component
  todo: fill out this section
  ***************************/

  /*  https://vueuse.org/core/useColorMode/  */
  import { useColorMode } from '@vueuse/core'

  const colorMode = useColorMode({
    emitAuto: true,
    attribute: 'class',
    modes: {
      light: 'theme-light',
      dark: 'theme-dark',
      snes: 'theme-snes',
      snes_dark: 'theme-snes-dark',
      nes: 'theme-nes',
      famicom: 'theme-famicom',
      gameboy: 'theme-gameboy',
      gameboy_dark: 'theme-gameboy-dark',
      goots: 'theme-goots',
      twisp: 'theme-twisp',
      2024: 'theme-2024',
      arc: 'theme-arc',
    },
  })

</script>

<script lang="ts">

  export default {
    data () {
      return {
        active: false
      }
    },
    methods: {
      toggle () {
        this.active = !this.active
      }
    }
  }

</script>

<template>
  <!--
    Would love to find a way to populate the options from the colorMode object's 'modes'. This works for now.
  -->

  <div class="toggle toggle_theme">
    <p class="toggle-label">Theme</p>
    <select v-model="colorMode">
      <option
        value="theme-light"
        @change="colorMode = 'light'"
        >
        Default
      </option>
      <option
        value="theme-dark"
        @change="colorMode = 'dark'"
        >
        Dark
      </option>
      <option
        value="theme-snes"
        @change="colorMode = 'snes'"
        >
        SNES
      </option>
      <option
        value="theme-snes-dark"
        @change="colorMode = 'snes_dark'"
        >
        SNES (Dark)
      </option>
      <option
        value="theme-nes"
        @change="colorMode = 'nes'"
        >
        NES
      </option>
      <option
        value="theme-famicom"
        @change="colorMode = 'famicom'"
        >
        Famicom
      </option>
      <option
        value="theme-gameboy"
        @change="colorMode = 'gameboy'"
        >
        GameBoy
      </option>
      <option
        value="theme-gameboy-dark"
        @change="colorMode = 'gameboy_dark'"
        >
        GameBoy (Dark)
      </option>
      <option
        value="theme-goots"
        @change="colorMode = 'goots'"
        >
        GOOTS
      </option>
      <option
        value="theme-twisp"
        @change="colorMode = 'twisp'"
        >
        twisp
      </option>
      <option
        value="theme-2024"
        @change="colorMode = '2024'"
        >
        2024
      </option>
      <option
        value="theme-arc"
        @change="colorMode = 'arc'"
        >
        Arc
      </option>
    </select>

  </div>

</template>

<style scoped lang="scss">

  .toggle-label {
    display: none;
  }

  .toggle {
    padding-left: 0!important;
  }

  select {

    // display: inline-block;

    height: $input-size;
    padding: .5rem 2rem .5rem .6rem;

    // FIX THIS
    border: 2px solid black!important;

    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right .5rem center;
    background-size: 1rem;

    border: none;

    appearance: none;

  }


</style>
