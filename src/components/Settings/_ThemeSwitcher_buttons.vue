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
      takahe: 'theme-takahe',
      twisp: 'theme-twisp',
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

  <div class="toggle toggle_theme toggle_theme-alt">
    <p class="toggle-label">Theme</p>
    <button @click="colorMode = 'light'" class="button-theme-light">Light</button>

    <button @click="colorMode = 'dark'" class="button-theme-dark">Dark</button>
    <button @click="colorMode = 'snes'" class="button-theme-snes">SNES</button>
    <!-- <button @click="colorMode = 'theme-snes-dark'" class="button-theme-snes-dark">SNES (Dark)</button> -->
    <button @click="colorMode = 'nes'" class="button-theme-nes">NES</button>
    <button @click="colorMode = 'famicom'" class="button-theme-famicom">Famicom</button>
    <button @click="colorMode = 'gameboy'" class="button-theme-gameboy">GameBoy</button>
    <!-- <button @click="colorMode = 'theme-gameboy-dark'" class="button-theme-gameboy-dark">GameBoy (Dark)</button> -->
    <button @click="colorMode = 'goots'" class="button-theme-goots">GOOTS</button>
    <button @click="colorMode = 'takahe'" class="button-theme-takahe">takahē</button>
    <button @click="colorMode = 'twisp'" class="button-theme-twisp">twisp</button>
    <button @click="colorMode = 'arc'" class="button-theme-arc">Arc</button>
  </div>

</template>

<style scoped lang="scss">

  .toggle-label {
    display: none;
  }

  .toggle_theme-alt {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;

  }

  button {

    width: 5rem;
    height: 5rem;
    
    color: #ffffff;

    border: .4rem solid rgba(255,255,255,0.2);
    border-radius: $card-border-radius;

    @include mq('large') {
      max-width: 23.3%;
      flex: 1 20%;
    }

    &.button-theme-light {
      color: #ffffff;
      background-color: rgb(79,67,174);
    }

    &.button-theme-dark {
      color: #ffffff;
      background-color: #010100;
    }

    &.button-theme-snes {
      color: #ffffff;
      background-color: rgb(79,67,174);
    }

    &.button-theme-snes-dark {
      color: #ffffff;
      background-color: #ffffff;
    }

    &.button-theme-nes {
      color: #ffffff;
      background-color: rgb(221,32,32);
    }

    &.button-theme-famicom {
      color: #ffffff;
      background-color: rgb(148,10,36);
    }

    &.button-theme-gameboy {
      color: #414141;
      background-color: #c4cfa1;
    }

    &.button-theme-gameboy-dark {
      color: #ffffff;
      background-color: #ffffff;
    }

    &.button-theme-goots {
      color: #ffffff;
      background-color: rgba(39, 110, 189, 1);
      font-size: 0;
      background-image: url('src/assets/goose.webp');
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 90%;
    }

    &.button-theme-takahe {
      color: #ffffff;
      background-color: rgb(9, 162, 215);
    }

    &.button-theme-twisp {
      color: #ffffff;
      background-color: rgb(239,79,145);
    }

    &.button-theme-arc {
      color: var(--arc-palette-foregroundPrimary);
      background-color: var(--arc-palette-background);
    }

  }

</style>
