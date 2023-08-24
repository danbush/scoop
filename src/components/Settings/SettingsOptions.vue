<script setup lang="ts">
  
  defineProps<{
    options_title: string
    options_description: string
    options_experimental: string
  }>()

</script>

<template>
  <article class="card card-settings">
    
    <header class="card-header">
      <hgroup>
        <h2 class="card-title">{{options_title}}</h2>
      </hgroup>
    </header>

    <section class="card-body">
      <span class="card-description">{{options_description}}</span>
      <slot />
    </section>

    <CardFooter />

  </article>
</template>

<style scoped lang="scss">

  .card-body {

    display: flex;
    flex-direction: column;
    gap: $card-padding-internal;

    @include mq('large') {
      
    }

  }

</style>