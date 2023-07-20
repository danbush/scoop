<script setup lang="ts">
  /************************** 
  GodBar Switcher component
  todo: fill out this section
  ***************************/

  import DevSwitcher from './_DevSwitcher.vue'
  import ThemeSwitcher from './_ThemeSwitcher.vue'
  import StorageSwitcher from './_StorageSwitcher.vue'

  defineProps<{
    
  }>()
  
</script>

<template>

  <div class="toolbar toolbar_GodBar">
    <StorageSwitcher />
    <ThemeSwitcher />
    <DevSwitcher />
  </div>

</template>

<style lang="scss">

.toolbar {

  display: flex;

  width: auto;
  height: auto;
  margin: 0.6rem 0;

}

.toggle {
  
    padding: 0 1.2rem;

    .toggle-label {
      font-size: .8rem;
      font-weight: 300;
    }

  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  /*
    on/off styles
    todo:
      - make a mixin of sorts
      - figure out a better place for this shiz
    */

  .devtip {

    padding: .73rem 1.2rem;

    position: absolute;
    top: 0;
    right: 0;
    background: rgba(#ffffff, 0.4);

    opacity: 0;
    
    pointer-events: none;
    
    @include transition;

  }

  .toggle_theme,
  .toggle_storage {
    @include transition;
    opacity: 0;
  }

  body.devmode-on {

    .devtip {
      opacity: 1;
      pointer-events: initial;
    }

    .toggle_theme,
    .toggle_storage {
      opacity: 1;
    }

  }

</style>
