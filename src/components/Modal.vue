<script setup lang="ts">

  import SettingsPanel from './SettingsPanel.vue'
  import ToggleSettings from './helpers/toggle_settings'
  
 window.addEventListener('keyup', function(event) {
   if(event.key === "Escape") {
     ToggleSettings();
   }
 });
</script>

<template>
  <!-- gonna use this for "peek" as well down the road -->
  <section id="app-modal" class="settings-off">
    <div class="input-toggle toggle_SettingsPanel">
      <label for="toggle_SettingsPanel">Settings</label>
      <button
        id="toggle_SettingsPanel"
        class="input-button"
        v-on:click="ToggleSettings"
         tabindex="0">
        <object
          type="image/svg+xml"
          data="src/assets/icon-settings.svg"
          alt="Settings icon"
          class="toggle-image-gear"
        ></object>
          <object
            type="image/svg+xml"
            data="src/assets/icon-close.svg"
            alt="Settings icon"
            class="toggle-close"
          ></object>
      </button>
    </div>
  
  </section>

  <div class="modal-container settings-off">

    <!--  TODO:
          pass in what type is open (ex: settings, peek view, etc.)
    -->
    <article class="modal">   

      <header class="modal-header">
        <slot name="header">
          <h3 class="modal-title">Settings</h3>
        </slot>
      </header>

      <article class="modal-body">
        <slot name="body">
          <SettingsPanel />
        </slot>
      </article>

      <footer class="modal-footer">
        <slot name="footer">
          
        </slot>
      </footer>

    </article>

  </div>

</template>

<style lang="scss">
  .app-body.settings-on {
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
    margin-top: -10vh;
  }
  .app-body.settings-off {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }
  
  .modal-container.settings-off {
    top: -200vh;
    filter: blur(10px);
    opacity: 0;
    pointer-events: none;
  }
  .modal-container.settings-on {
    top: 0;
    filter: blur(0);
    opacity: 100;
    pointer-events:initial;
    transition: top 0.25s ease-in-out !important;
  }
  .settings-off {
    .toggle-close {
      transition: opacity 0.9s ease-in-out;
      opacity: 0;
    }
    .toggle-image-gear {
      transition: opacity 0.9s ease-in-out;
      opacity: initial;
    }
    button#toggle_SettingsPanel {
      transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;
      &:hover {
        transform: rotate(45deg) scale(0.9);
      }
      &:active {
        transform: rotate(180deg) scale(0.7);
      }
    }
  }
  .settings-on {
    .modal-title {
      display: none;
    }
    .toggle-close {
      opacity: initial;
      transition: opacity 0.9s ease-in-out;
    }
    .toggle-image-gear {
      opacity: off;
      transition: opacity 0.9s ease-in-out;
    }
    button#toggle_SettingsPanel {
      transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;
      &:hover {
        transform: scale(0.9);
      }
      &:active {
        transform: scale(0.7);
      }
    }
  }
</style>

<style scoped lang="scss">


  $header-height:   4.6rem;   // DO THIS BETTER

  .modal {

    display: flex;
    flex-direction: column;
    width: calc( 100% - ($card-padding-internal * 2) );
    // max-height: calc(100vh - calc($header-height + $card-padding-internal));
    max-height: calc(100vh - $header-height);
    height: auto;
    // padding: $card-padding-internal;

    position: absolute;
    top: $header_height;      // DO THIS BETTER
    left: 1rem;
    z-index: 5000;

    overflow-x: auto;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

  }

  .modal-container {

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 50;

    background-color: color-mix(in srgb, var(--app-background-color) 65%, transparent);
    backdrop-filter: blur(10px);
    
    transition: all 0.5s ease-in-out;

  }

  .modal-header {

    display: flex;
    flex-direction: column;

    /* TMP: make this conditional based on what type is open
    display: none;*/

    @include mq('large') {
      flex-direction: row;
    }

    .modal-title {
      @include mq('large') {
        flex-grow: 2;
      }
    }

    .toggle {

      text-align: right;

      @include mq('large') {
        flex-shrink: 1;
      }

    }

  }

</style>