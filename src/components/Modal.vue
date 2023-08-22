<script setup lang="ts">

  import SettingsPanel from './SettingsPanel.vue'

</script>

<script lang="ts">

</script>

<template>

  <div class="modal-container">

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
    max-height: calc(100vh - calc($header-height + $card-padding-internal));
    height: auto;
    padding: $card-padding-internal;

    position: absolute;
    top: $header_height;      // DO THIS BETTER
    left: 1rem;
    z-index: 50;

    overflow-x: auto;
    overflow-y: scroll;

    color: var(--app-text-color);
    background-color: var(--card-body-background);

    border-radius: $card-border-radius;


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

    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);

  }

  .modal-header {
  }

  .modal-footer {
  }

  .modal-body {
  }

</style>