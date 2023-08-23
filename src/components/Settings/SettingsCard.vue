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

  .card-description {

    display: block;
    margin-bottom: 1.2rem;

    &:empty {
      display: none;
    }

  }

</style>