<script setup lang="ts">
  
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

    <SettingsCardFooter />

  </article>
</template>

<style lang="scss">

  .card-settings .card {

    a {
      color: var(--button-background-primary);
    }
  
  }

  // d'oh! this is really dumb. really need to re-think structure here.
  .card-settings .card-settings {

    border-radius: 0!important;
 
    .card-header {

      padding: 0 0 0.8rem 0;

      color: var(--app-text-color);
      text-align: left;

      border-bottom: .2rem solid var(--card-header-background);
    
      .card-title {
        text-transform: capitalize;
      }

      background: none!important;
    
    }

    .card-body {
      padding-left: 0;
      padding-right: 0;
    }


  }

  .card-description {

    display: block;
    margin-bottom: 1.2rem;

    &:empty {
      display: none;
    }

  }

</style>