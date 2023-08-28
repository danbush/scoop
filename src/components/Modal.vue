<script setup lang="ts">

  import SettingsPanel from './SettingsPanel.vue'
  import Toggle from './inputs/toggle.vue'


</script>

<script lang="ts">

</script>

<template>

  <div class="modal-container">

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
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 50;

    background-color: color-mix(in srgb, var(--app-background-color) 65%, transparent);
    backdrop-filter: blur(10px);

  }

  .modal-header {

    display: flex;
    flex-direction: column;

    // TMP: make this conditional based on what type is open
    display: none;

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

  .modal-footer {
  }

  .modal-body {

  }

</style>