<script setup lang="ts">
  
  import Toggle from '../inputs/toggle.vue'

  defineProps<{
    card_slug: string
    card_title: string
    card_description: string
  }>()

</script>

<template>

  <article :id="card_slug" class="card card-settings">
    
    <header class="card-header">
      <hgroup>
        <h2 class="card-title">{{card_title}}</h2>
      </hgroup>
    </header>

    <section class="card-body">
      <p class="card-description">{{card_description}}</p>
      <slot />
    </section>

    <footer class="card-footer">
      <toggle
        inputName="Experimental Settings"
        inputClass="toggle_experimental"
        inputFunction="function"
      ></toggle>
    </footer>

  </article>

</template>

<style scoped lang="scss">

  .card {
    height: auto;
  }

  .card-description {

    display: block;
    margin-bottom: 1.2rem;

    &:empty {
      display: none;
    }

  }

  .card-footer {

    width: 100%;
    margin-top: auto;
    padding: $card_padding-internal;

    color: var(--card-header-color);

    background-color: var(--card-footer-background);
    background-image: linear-gradient(
      135deg,
      var(--card-footer-background) 25%,
      rgba(0,0,0,.05) 25%,
      rgba(0,0,0,.05) 50%,
      var(--card-footer-background) 50%,
      var(--card-footer-background) 75%,
      rgba(0,0,0,.05) 75%,
      rgba(0,0,0,.05) 100%,
    );
    background-size: 56.57px 56.57px;

    .toggle {

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    
      p {

        margin-bottom: 0;

        font-size: 0.9rem;
        font-weight: bold;
        letter-spacing: 0.2rem;
        line-height: 2.4;
        text-transform: uppercase;

      }

    }

  }

</style>