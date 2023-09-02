<script setup lang="ts">
  /************************** 
  Top level Card container
  todo: fill out this section
  ***************************/
  
  defineProps<{
    card_title: string
    
  }>()

</script>

<template>
  <article class="card card-single-source">
    
    <header class="card-header">
      <hgroup>
        <h2 class="card-title">{{card_title}}</h2>
        <span class="card-description">{{card_description}}</span>
      </hgroup>
    </header>

    <section class="card-body">
      <slot />
    </section>

  </article>
</template>

<style scoped lang="scss">

  .card-single-source {

    position: relative;
  
    .card-body {
      padding: 0;
    }

    .card-header,
    .card-footer {
      position: relative;
      z-index: 20;
    }

    &::before,
    &::after {

      content: '';

      display: block;
      width: $card-padding-internal;
      height: 100%;

      position: absolute;
      z-index: 10;

      background: linear-gradient(90deg, rgba(var(--card-body-background),1) 0%, rgba(var(--card-body-background),0) 100%);

    }

    &::before {
      top: 0;
      bottom: 0;
      left: 0;
    }

    &::after {
      top: 0;
      right: 0;
      bottom: 0;
      transform: rotate(180deg);
    }

  }

</style>